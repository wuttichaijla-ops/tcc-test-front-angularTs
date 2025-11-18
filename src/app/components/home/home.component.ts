import { Component, OnInit } from '@angular/core';
import { DataService, ProductCode } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productCodes: ProductCode[] = [];
  newCode: string = '';
  newProductName: string = '';
  isLoading: boolean = false;
  errorMessage: string | null = null;

  private codePattern = /^[A-Z0-9]{4}(-[A-Z0-9]{4}){3}$/;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.loadProductCodes();
  }

  loadProductCodes(): void {
    this.isLoading = true;
    this.errorMessage = null;

    this.dataService.getProductCodes().subscribe({
      next: (codes) => {
        this.productCodes = codes;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading product codes:', error);
        this.errorMessage = 'โหลดข้อมูลไม่สำเร็จ';
        this.isLoading = false;
      }
    });
  }

  onCodeInput(value: string): void {
    const raw = value.toUpperCase().replace(/[^A-Z0-9]/g, '');
    const groups = raw.match(/.{1,4}/g) || [];
    this.newCode = groups.join('-').substring(0, 19);
  }

  isCodeValid(): boolean {
    return this.codePattern.test(this.newCode);
  }

  canAdd(): boolean {
    return (
      this.newProductName.trim().length > 0 &&
      this.isCodeValid()
    );
  }

  addProductCode(): void {
    if (!this.canAdd()) {
      this.errorMessage =
        'รหัสสินค้าต้องเป็นตัวอักษรภาษาอังกฤษพิมพ์ใหญ่และตัวเลข 16 หลัก รูปแบบ XXXX-XXXX-XXXX-XXXX';
      return;
    }

    this.errorMessage = null;

    this.dataService
      .createProductCode({
        product_name: this.newProductName.trim(),
        code: this.newCode.toUpperCase()
      })
      .subscribe({
        next: (code) => {
          this.productCodes.push(code);
          this.newProductName = '';
          this.newCode = '';
        },
        error: (error) => {
          console.error('Error creating product code:', error);
          this.errorMessage = 'ไม่สามารถเพิ่มข้อมูลได้';
        }
      });
  }

  confirmDelete(code: ProductCode): void {
    const ok = window.confirm(
      `ต้องการลบข้อมูล รหัสสินค้า ${code.code} หรือไม่ ?`
    );
    if (!ok) {
      return;
    }

    this.dataService.deleteProductCode(code.id).subscribe({
      next: () => {
        this.productCodes = this.productCodes.filter(
          (c) => c.id !== code.id
        );
      },
      error: (error) => {
        console.error('Error deleting product code:', error);
        this.errorMessage = 'ไม่สามารถลบข้อมูลได้';
      }
    });
  }
}

