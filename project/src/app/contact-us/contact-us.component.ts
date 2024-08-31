import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  
  submitted = false;
  constructor(private http: HttpClient,) { }
  ngOnInit(): void {
    this.generateCaptcha()
  }

  submitForm(form: NgForm) {
    if (form.valid) {
      const formData = form.value;
      this.http.post<any>('', formData)
        .subscribe(
          () => {
            this.submitted = true;
            console.log("send sucessfully!");

            alert("Contact Send Sucessfully!!")
            
             // Clear the form after successful submission
             form.resetForm();

            // this.message = 'Message sent successfully!';
          },
          (error: any) => {
            console.error('Error:', error);
            console.log("faild to send!");

            // this.message = 'Failed to send message. Please try again later.';
          }
        );
    }
  } 
  captchaText: string = '';
userText: string = '';
outputMessage: string = '';
isCorrect: boolean = false;
alphaNums: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%@#$^&*!'.split('');


generateCaptcha() {
  let captchaArray = [];
  for (let i = 0; i < 7; i++) {
    captchaArray.push(this.alphaNums[Math.floor(Math.random() * this.alphaNums.length)]);
  }
  this.captchaText = captchaArray.join('');
}

validateCaptcha() {
  if (this.userText === this.captchaText) {
    this.outputMessage = 'Correct!';
    this.isCorrect = true;
  } else {
    this.outputMessage = 'Incorrect, please try again';
    this.isCorrect = false;
  }
}

refreshCaptcha() {
  this.userText = '';
  this.generateCaptcha();
  this.outputMessage = '';
  this.isCorrect = false;
}
  
}