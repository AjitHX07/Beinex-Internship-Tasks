import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { UpdateDataService } from '../../services/update/update-data.service';

@Component({
  selector: 'app-update-data',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './update-data.component.html',
  styleUrl: './update-data.component.scss'
})
export class UpdateDataComponent implements OnInit {

  postToUpdate = {
    id: null, // The ID should be set to the ID of the post being edited
    title: '',
    body: '',
    userId: 1 // Can be adjusted as needed
  };
  response: any;

  constructor(private postService: UpdateDataService) { }

  ngOnInit(): void {
    // Optionally, fetch the post data here based on ID if needed.
    // This logic would depend on how you pass the ID (e.g., from a route or input).
  }

  onUpdate(): void {
    if (this.postToUpdate.id) {
      this.postService.updatePost(this.postToUpdate.id, this.postToUpdate).subscribe(
        (res) => {
          this.response = res;
          console.log('Post updated:', res);
        },
        (error) => {
          console.error('Error updating post:', error);
        }
      );
    } else {
      console.error('Post ID is required for an update');
    }
  }
}