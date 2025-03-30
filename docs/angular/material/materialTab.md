---
title: Material选项卡的使用
order: 2
group:
  title: Angular Material
  order: 5
---

在做项目的时候需要做一个登录注册页面，当时找了一些模板，最终以[yapi](http://yapi.demo.qunar.com/login)作为原型在使用Material做登录注册页面

## 操作方式

yapi这个页面挺好看的，但是有一个不足之处就是不能直接进入注册选项卡，要先进登陆选项卡，在切换成注册选项卡，所以这里稍微的调了一下

1. 用户从主页面点击登录，显示的是登录选项卡

2. 用户中主页面点击注册，显示的是注册选项卡

3. 复制地址栏中的链接，打开一个新的标签页，访问复制的链接，页面显示是一样的


## 思路

1. 要实现点击登录显示登录选项卡，点击注册显示注册选项卡，那么就需要一个值来标记点击的是登录还是注册，我用`selectedIndex`来标记，值为1时显示登录选项卡，值为2是显示注册选项卡

2. 在主页面点击的时候，通过路由进行传递数据，使用`MatTabGroup`的`@Input()
selectedIndex: number | null`来显示相应的选项卡

3. 当点击选项卡时，需要改变地址栏的链接，所以使用`router.navigate(['/login', this.selectedIndex])`改变地址栏的链接

4. 点击选项卡的时候，使用`(click)`是没有效果的，需要使用`MatTabGroup`提供的`@Output()
selectedTabChange: EventEmitter<MatTabChangeEvent>：选项卡选择发生更改时发出的事件`，这里需要注意的是要使用`mat-tab-group`组件发送出来的值去改变`selectedIndex`的值，如果使用下面代码改变`selectedIndex`的值，将会出现一个致命的`bug`

```typescript
this.selectedIndex = this.selectedIndex === 1 ? 2: 1;
```

如果这样子做点击登录和注册不会有任何问题，但是一旦点击后退，那么将会进入一个死循环，后退之后ngOnInit里面的代码检测到地址栏变化了，这将改变`selectedIndex`的值，`selectedIndex`的值一旦变化，由于`<mat-tab-group [selectedIndex]="selectedIndex - 1" (selectedTabChange)="changeTab($event)">`绑定了`selectedIndex`，所以选项卡会改变，选项卡一改变，就会触发`selectedTabChange`事件，调用`changeTab`函数，又会改变`selectedIndex`的值，一直循环下去，然后就呵呵了

## 步骤

1. 新建一个`login`组件

```bash
ng generate component layout/login
```

2. 编写login组件的html代码

```html
<div class="login-box">
  <div class="m-bg">
    <div class="m-bg-mask m-bg-mask0"></div>
    <div class="m-bg-mask m-bg-mask1"></div>
    <div class="m-bg-mask m-bg-mask2"></div>
    <div class="m-bg-mask m-bg-mask3"></div>
  </div>
  <div class="card-box">
    <div class="form-box">
      <div class="login-logo">
        <svg class="svg" width="100px" height="100px" viewBox="0 0 64 64" version="1.1"><title>Icon</title><desc>Created with Sketch.</desc><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1"><stop stop-color="#FFFFFF" offset="0%"></stop><stop stop-color="#F2F2F2" offset="100%"></stop></linearGradient><circle id="path-2" cx="31.9988602" cy="31.9988602" r="2.92886048"></circle><filter x="-85.4%" y="-68.3%" width="270.7%" height="270.7%" filterUnits="objectBoundingBox" id="filter-3"><feOffset dx="0" dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur stdDeviation="1.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur><feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.159703351 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix></filter></defs><g id="首页" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="大屏幕"><g id="Icon"><circle id="Oval-1" fill="url(#linearGradient-1)" cx="32" cy="32" r="32"></circle><path d="M36.7078009,31.8054514 L36.7078009,51.7110548 C36.7078009,54.2844537 34.6258634,56.3695395 32.0579205,56.3695395 C29.4899777,56.3695395 27.4099998,54.0704461 27.4099998,51.7941246 L27.4099998,31.8061972 C27.4099998,29.528395 29.4909575,27.218453 32.0589004,27.230043 C34.6268432,27.241633 36.7078009,29.528395 36.7078009,31.8054514 Z" id="blue" fill="#2359F1" fill-rule="nonzero"></path><path d="M45.2586091,17.1026914 C45.2586091,17.1026914 45.5657231,34.0524383 45.2345291,37.01141 C44.9033351,39.9703817 43.1767091,41.6667796 40.6088126,41.6667796 C38.040916,41.6667796 35.9609757,39.3676862 35.9609757,37.0913646 L35.9609757,17.1034372 C35.9609757,14.825635 38.0418959,12.515693 40.6097924,12.527283 C43.177689,12.538873 45.2586091,14.825635 45.2586091,17.1026914 Z" id="green" fill="#57CF27" fill-rule="nonzero" transform="translate(40.674608, 27.097010) rotate(60.000000) translate(-40.674608, -27.097010) "></path><path d="M28.0410158,17.0465598 L28.0410158,36.9521632 C28.0410158,39.525562 25.9591158,41.6106479 23.3912193,41.6106479 C20.8233227,41.6106479 18.7433824,39.3115545 18.7433824,37.035233 L18.7433824,17.0473055 C18.7433824,14.7695034 20.8243026,12.4595614 23.3921991,12.4711513 C25.9600956,12.4827413 28.0410158,14.7695034 28.0410158,17.0465598 Z" id="red" fill="#FF561B" fill-rule="nonzero" transform="translate(23.392199, 27.040878) rotate(-60.000000) translate(-23.392199, -27.040878) "></path><g id="inner-round"><use fill="black" fill-opacity="1" filter="url(#filter-3)" xlink:href="#path-2"></use><use fill="#F7F7F7" fill-rule="evenodd" xlink:href="#path-2"></use></g></g></g></g></svg>
      </div>

      <mat-tab-group [selectedIndex]="selectedIndex - 1" (selectedTabChange)="changeTab($event)">
        <mat-tab label="登录" >
          <form class="login-form" [formGroup]="login" (ngSubmit)="userLogin()">
            <mat-form-field>
              <input matInput placeholder="账户" formControlName="username">
              <mat-error *ngIf="login.controls['username'].invalid">{{getLoginUserNameErrorMessage()}}</mat-error>
            </mat-form-field>
            <mat-form-field>
              <input type="password" matInput placeholder="密码" formControlName="password">
              <mat-error *ngIf="login.controls['password'].invalid">{{getLoginPasswordErrorMessage()}}</mat-error>
            </mat-form-field>
            <div>
              <button type="submit" class="login-form-button">登录</button>
            </div>
          </form>
        </mat-tab>
        <mat-tab label="注册">
          <form [formGroup]="register" class="login-form" (ngSubmit)="userRegister()">
            <mat-form-field>
              <input matInput placeholder="昵称" formControlName="username">
              <mat-error *ngIf="register.controls['username'].invalid">{{getUsernameErrorMessage()}}</mat-error>
            </mat-form-field>
            <mat-form-field>
              <input matInput placeholder="账户" formControlName="accountNumbser">
              <mat-error *ngIf="register.controls['accountNumbser'].invalid">{{getAccountNumbserErrorMessage()}}</mat-error>
            </mat-form-field>
            <mat-form-field>
              <input matInput type="password" placeholder="密码" formControlName="password">
              <mat-error *ngIf="register.controls['password'].invalid">{{getPasswordErrorMessage()}}</mat-error>
            </mat-form-field>
            <mat-form-field>
              <input matInput placeholder="邮箱" formControlName="email">
              <mat-error *ngIf="register.controls['email'].invalid">{{getEmailErrorMessage()}}</mat-error>
            </mat-form-field>
            <div>
              <button type="submit" class="login-form-button">注册</button>
            </div>
          </form>
        </mat-tab>
      </mat-tab-group>

    </div>

  </div>


</div>

```

3. 编写scss代码

```scss
button {
  outline: none;
}
.login-box {
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  height: 100%;
  background-color: #eceef1;
}

.m-bg {
  position: absolute;
  left: 0;
  top: -364px;
  height: 1000px;
  width: 100%;
  -webkit-transform: skewY(-11deg);
  -moz-transform: skewY(-11deg);
  -ms-transform: skewY(-11deg);
  -o-transform: skewY(-11deg);
  transform: skewY(-11deg);
  background-image: linear-gradient(-20deg,#21d4fd,#b721ff);

  .m-bg-mask {
    position: absolute;
    height: 180px;
  }

  .m-bg-mask0 {
    bottom: 0;
    left: 0;
    width: 30%;
    background-image: linear-gradient(120deg,#6ab3fd,#8ba3fd 102%);
  }

  .m-bg-mask1 {
    bottom: 180px;
    right: 0;
    width: 36%;
    background-image: linear-gradient(120deg,#28c5f5,#6682fe);
  }

  .m-bg-mask2 {
    bottom: 540px;
    left: 0;
    width: 20%;
    height: 240px;
    background-image: linear-gradient(120deg,#8121ff,#5e5ef7);

  }

  .m-bg-mask3 {
    bottom: 540px;
    left: 20%;
    width: 70%;
    height: 240px;
    background-image: linear-gradient(-225deg,#5f2bff,#6088fe 48%,#22ccf6);
  }

}


.card-box {
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 6%;

  .form-box {
    position: relative;
    padding: 1.5rem;
    width: 33%;
    background: #fff;
    z-index: 1;
    -webkit-border-radius: .4rem;
    -moz-border-radius: .4rem;
    border-radius: .4rem;


    mat-tab-group {
      margin-top: 3rem;
    }
    .login-form {
      width: 100%;
      padding-top: 1rem;

      mat-form-field {
        width: 100%;
      }

      .login-form-button {
        background-image: linear-gradient(90deg,#6d69fe 0,#48a0fa)!important;
        border: none;
        margin-top: .2rem;
        width: 100%;
        color: #fff;
        background-color: #2395f1;
        text-align: center;
        cursor: pointer;
        padding: .375rem .75rem;
        font-size: .9rem;
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        border-radius: 4px;
        -webkit-transition: all .3s cubic-bezier(.645, .045, .355, 1);
        -moz-transition: all .3s cubic-bezier(.645, .045, .355, 1);
        -ms-transition: all .3s cubic-bezier(.645, .045, .355, 1);
        -o-transition: all .3s cubic-bezier(.645, .045, .355, 1);
        transition: all .3s cubic-bezier(.645, .045, .355, 1);
      }

    }
  }

  .login-logo {
    font-size: 0;
    position: absolute;
    left: 50%;
    top: 0;
    background-image: linear-gradient(-20deg,#21d4fd,#b721ff);
    -webkit-box-shadow: 0 4px 6px rgba(50, 50, 93, .11), 0 1px 3px rgba(0, 0, 0, .08);
    -moz-box-shadow: 0 4px 6px rgba(50, 50, 93, .11), 0 1px 3px rgba(0, 0, 0, .08);
    box-shadow: 0 4px 6px rgba(50, 50, 93, .11), 0 1px 3px rgba(0, 0, 0, .08);
    -webkit-transform: translate(-50%,-50%);
    -moz-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    -o-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    padding: 1rem;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;

    .svg {
      //-webkit-transform: rotate(360deg);
      -webkit-animation: spin 5s linear infinite;
      -o-animation: spin 5s linear infinite;
      animation: spin 5s linear infinite;
    }
  }

}

@-webkit-keyframes spin {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
     -webkit-transform: rotate(360deg);
  }
}

```

4. 编写ts代码

```typescript
import {Component, OnInit} from '@angular/core';
import {VerificationCode} from '../../entity/verification-code';
import 'src/assets/lib/TCaptcha';
import {UserService} from '../../service/user.service';
import {ConfOption} from '../../conf/conf-option';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {emailValidator, identityRevealedValidator, passwordValidator} from '../../utils/userVerification';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Params, Router} from '@angular/router';
declare var TencentCaptcha:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  selectedIndex: number = 1;

  //登录
  login = this.fb.group({
    username: ['', Validators.compose([Validators.required])],
    password: ['', Validators.compose([Validators.required])]
  });

  //注册
  register = this.fb.group({
    //用户昵称
    username: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
    //账户名称，登录账户用的
    accountNumbser: ['', Validators.required],
    //邮箱
    email: ['', Validators.compose([Validators.required])],
    //密码
    password: ['', Validators.compose([Validators.required])]
  });


  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: Params) => {
      this.selectedIndex = +params.get('id');
    })


  }


  /**
   * 更改选项卡
   * @param event
   */
  changeTab(event: any) {
    this.selectedIndex = event.index + 1;
    this.router.navigate(['/login', this.selectedIndex]);
  }

  /**
   * 用户注册
   */
  userRegister() {
    console.log(this.register.value);

  }

  /**
   * 用户登录
   */
  userLogin() {
    console.log(this.login.value);
  }

  /**
   * 得到账户输入错误的信息
   */
  getAccountNumbserErrorMessage(): string {
    return this.register.controls['accountNumbser'].hasError('required') ? '输入不能为空':
      '';
  }

  /**
   * 得到用户输入的错误信息
   */
  getUsernameErrorMessage(): string {
    return this.register.controls['username'].hasError('required') ? '输入不能为空' :'';
  }

  /**
   * 得到邮箱输入的错误信息
   */
  getEmailErrorMessage() {
    return this.register.controls['email'].hasError('required') ? '输入不能为空' :
          '';
  }

  /**
   * 得到密码输入的错误信息
   */
  getPasswordErrorMessage() {
    return this.register.controls['password'].hasError('required') ? '输入不能为空':
      '';
  }

  /**
   * 得到登录的错误信息
   */
  getLoginPasswordErrorMessage() {
    return this.login.controls['password'].hasError('required') ? '输入不能为空':
        '';
  }

  /**
   * 得到登录账户的错误信息
   */
  getLoginUserNameErrorMessage() {
    return this.login.controls['username'].hasError('required') ? '输入不能为空':
      '';
  }

}

```
