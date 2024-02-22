import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user-service';
import { ActivatedRoute } from '@angular/router';
import { UsersDto } from '../../dto/users.dto';

@Component({
    selector: 'app-user',
    standalone: true,
    imports: [],
    templateUrl: './user.component.html',
    styleUrl: './user.component.scss',
})
export class UserComponent implements OnInit {
    user: UsersDto;

    constructor(
        private user_service: UserService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.route.queryParams.subscribe((params) => {
            // Access the query parameters here
            this.user_service.getUser(params['id']).subscribe((user) => {
                this.user = user;
                console.log(this.user);
            });
        });
    }
}
