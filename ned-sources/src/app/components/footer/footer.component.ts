import { Component, OnInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, AfterContentChecked {

  constructor() { }

  ngOnInit() {
  }
  
  ngAfterContentChecked(){
    this.fixLayout();
    window.onresize = function(event) {
      this.fixLayout();
    }.bind(this);
  }

  fixLayout() {
    var main_header_height = (document.getElementById("main-header") != null) ? document.getElementById("main-header").offsetHeight : 0;
    var main_footer_height = (document.getElementById("main-footer") != null) ? document.getElementById("main-footer").offsetHeight : 0;
    var neg = main_header_height + main_footer_height;
    var window_height = window.innerHeight || window.document.documentElement.clientHeight || window.document.body.clientHeight || window.document.body.offsetHeight;
    if(document.getElementById('sidebar') != null) {
      var sidebar_height = parseInt(getComputedStyle(document.getElementById('sidebar')).height, 10);
    }
    if(document.body.className.match("fixed") != null) {
      document.getElementById("content-wrapper").style.minHeight = (window_height - document.getElementById("main-footer").offsetHeight) + "px";
      console.log("Never comes to this block");
    }
    else {
      var postSetWidth;
      if (window_height >= sidebar_height) {
        if(document.getElementById("content-wrapper") != null) {
          document.getElementById("content-wrapper").style.minHeight = (window_height - neg) + "px";
          postSetWidth = window_height - neg;
        }
      } else {
        if(document.getElementById("content-wrapper") != null) {
          document.getElementById("content-wrapper").style.minHeight = sidebar_height + "px";
          postSetWidth = sidebar_height;
        }
      }
    }
  }
}
