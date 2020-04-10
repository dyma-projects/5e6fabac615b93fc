import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class UserService {
  public users: BehaviorSubject<string[]> = new BehaviorSubject(["Snoopy"]);

  addUser(username: string): void {
    this.users.value.push(username);
  }

  constructor() {}
}
