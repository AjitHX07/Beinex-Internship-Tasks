import { Component } from '@angular/core';
import { PostDataService } from '../../services/post/post-data.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-data',
  standalone: true,
  imports: [CommonModule, HttpClientModule,
    FormsModule],
  templateUrl: './input-data.component.html',
  styleUrl: './input-data.component.scss'
})
export class InputDataComponent {

  newPost = {
    title: '',
    body: '',
    userId: 1  // Hardcoded for demonstration
  };
  response: any;

  constructor(private postService: PostDataService) { }

  onSubmit(): void {
    this.postService.createPost(this.newPost).subscribe(
      (res) => {
        this.response = res;
        console.log('Post created:', res);
      },
      (error) => {
        console.error('Error creating post:', error);
      }
    );
  }
}