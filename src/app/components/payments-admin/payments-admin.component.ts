import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ChartModule } from 'primeng/chart';
import { TableModule } from 'primeng/table';
import { PaymentsDto } from 'src/app/dto/payments.dto';
import { PaymentsService } from 'src/app/service/payments.service';

@Component({
    selector: 'app-payments-admin',
    standalone: true,
    imports: [ChartModule, TableModule, CurrencyPipe, TranslateModule],
    templateUrl: './payments-admin.component.html',
    styleUrl: './payments-admin.component.scss',
})
export class PaymentsAdminComponent implements OnInit {
    barData: any;
    barOptions: any;
    pieData: any;
    pieOptions: any;
    payments: PaymentsDto[];

    constructor(private payments_service: PaymentsService, private translate: TranslateService) {}

    ngOnInit(): void {
        console.log(this.translate.instant('demo.greeting'));

        this.payments_service.getPayments().subscribe((payments) => {
            this.payments = payments;
            console.log(this.payments);
        });

        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue(
            '--text-color-secondary'
        );
        const surfaceBorder =
            documentStyle.getPropertyValue('--surface-border');

        this.barData = {
            labels: [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
            ],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor:
                        documentStyle.getPropertyValue('--primary-500'),
                    borderColor:
                        documentStyle.getPropertyValue('--primary-500'),
                    data: [65, 59, 80, 81, 56, 55, 40],
                },
                {
                    label: 'My Second dataset',
                    backgroundColor:
                        documentStyle.getPropertyValue('--primary-200'),
                    borderColor:
                        documentStyle.getPropertyValue('--primary-200'),
                    data: [28, 48, 40, 19, 86, 27, 90],
                },
            ],
        };

        this.barOptions = {
            plugins: {
                legend: {
                    labels: {
                        fontColor: textColor,
                    },
                },
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary,
                        font: {
                            weight: 500,
                        },
                    },
                    grid: {
                        display: false,
                        drawBorder: false,
                    },
                },
                y: {
                    ticks: {
                        color: textColorSecondary,
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false,
                    },
                },
            },
        };

        this.pieData = {
            labels: ['A', 'B', 'C'],
            datasets: [
                {
                    data: [540, 325, 702],
                    backgroundColor: [
                        documentStyle.getPropertyValue('--indigo-500'),
                        documentStyle.getPropertyValue('--purple-500'),
                        documentStyle.getPropertyValue('--teal-500'),
                    ],
                    hoverBackgroundColor: [
                        documentStyle.getPropertyValue('--indigo-400'),
                        documentStyle.getPropertyValue('--purple-400'),
                        documentStyle.getPropertyValue('--teal-400'),
                    ],
                },
            ],
        };

        this.pieOptions = {
            plugins: {
                legend: {
                    labels: {
                        usePointStyle: true,
                        color: textColor,
                    },
                },
            },
        };
    }
}
