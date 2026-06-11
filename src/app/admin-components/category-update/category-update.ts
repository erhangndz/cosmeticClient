import { CategoryService } from './../../services/category-service';
import { ChangeDetectorRef, Component, inject, Input, OnInit } from '@angular/core';
import { Category } from '../../models/category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-update',
  standalone: false,
  templateUrl: './category-update.html',
  styleUrl: './category-update.css',
})
export class CategoryUpdate implements OnInit {

@Input() id:string;
category:Category= new Category();

private categoryService = inject(CategoryService);
private cdr = inject(ChangeDetectorRef);
private router = inject(Router);


  ngOnInit(): void {
   this.categoryService.getById(this.id).subscribe({
    next: data =>{
      this.category = data;
      this.cdr.detectChanges();
    },
    error: err => console.log(err)
  })
  }

update(){
  this.categoryService.update(this.id,this.category).subscribe({
    complete: () =>{
      this.router.navigate(['/categories'])
    },
    error: err => console.log(err)
  })
}





}
