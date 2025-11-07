import { ComponentFixture, TestBed } from '@angular/core/testing';

// 1. Importa la clase "ProductList" (SIN "Component")
//    ...desde el archivo "./product-list"
import ProductList from './product-list';

// 2. Describe "ProductList"
describe('ProductList', () => { 
  
  // 3. Define las variables con el tipo "ProductList"
  let component: ProductList;
  let fixture: ComponentFixture<ProductList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // 4. Importa "ProductList"
      imports: [ProductList] 
    })
    .compileComponents();

    // 5. Crea "ProductList"
    fixture = TestBed.createComponent(ProductList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});