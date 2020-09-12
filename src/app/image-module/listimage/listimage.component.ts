import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
import { ToastrService } from 'ngx-toastr';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-listimage',
  templateUrl: './listimage.component.html',
  styleUrls: ['./listimage.component.css']
})
export class ListimageComponent implements OnInit {
  selectedFile: File;
  urls: any[];
  retrievedImage: any;
  constructor(private imageService: ImageService,private toastr: ToastrService) { }

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
      console.log(res)
     if(res.message=="Image Uploaded"){
      this.toastr.success("image save successful");
     }else if(res.message=="InvalidFileFormat"){
      this.toastr.error("Invalid file format");
     }
      this.ngOnInit()
    })

  }

}
