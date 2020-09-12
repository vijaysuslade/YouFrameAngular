import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-listimage',
  templateUrl: './listimage.component.html',
  styleUrls: ['./listimage.component.css']
})
export class ListimageComponent implements OnInit {

  uploadForm: FormGroup;
  selectedFile: File;
  urls: any[];
  retrievedImage: any;
  constructor(private formBuilder: FormBuilder,
    private imageService: ImageService) { }

  ngOnInit(): void {
    this.imageService.getImageUrls().subscribe(urls => {
      this.urls = urls;
      console.log(this.urls);
    })
  }
  file: string;
  handleChange(event) {
    this.selectedFile = event.target.files[0];
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile);
    this.imageService.saveImage(uploadImageData).subscribe(res => {
      console.log(res);
      this.ngOnInit()
    })

  }

}
