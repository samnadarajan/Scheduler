import {Component} from "@angular/core";

@Component({
  selector: "login",
  template: `
   <div class="row container padding-top">
    <h5>{{loginTitle}}</h5>
    <form class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <input id="email" type="email" class="validate">
          <label for="email">Email</label>
        </div>
        <div class="input-field col s12">
          <input id="password" type="password" class="validate">
          <label for="password">Password</label>
        </div>
      </div>
      <button class="btn waves-effect waves-light" type="submit" name="action">Login</button>
    </form>
  </div>
  `
})
export class LoginComponent {
  loginTitle: string = "Login to Scheduler"
}
