import { Injectable } from "@angular/core";
import { STORAGE_KEYS } from "../config/storage_keys.config";
import { LocalUser } from "../models/local_user";

@Injectable()
export class StorageService {

  getLocalUser() : LocalUser {
    let usr = localStorage.getItem(STORAGE_KEYS.localUser);
    if (usr == null) {
        return null;
    }
    else {
        return JSON.parse(usr);//JSON.parse porque o local store armazena string
    }
}

setLocalUser(obj : LocalUser) {
    if (obj == null) {
        localStorage.removeItem(STORAGE_KEYS.localUser);
    }
    else {
        localStorage.setItem(STORAGE_KEYS.localUser, JSON.stringify(obj)); //converter obj para string é so usar a inversão jason.stringfi(obj)
    }
}
}