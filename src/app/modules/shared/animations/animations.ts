import { style, animate, trigger, transition } from '@angular/animations';

export const slideInOutAnimation = trigger('slideInOut', [
    transition(':enter', [
        style({ opacity: '0' }),
        animate('.15s ease-out', style({ opacity: '1' }))
    ]),
    transition(':leave', [
        animate('.15s ease-out', style({ opacity: '0' }))
    ])
]);

export const slideInOutValueChangedAnimation = trigger('valueChanged', [
    transition('* => *', [
        style({ opacity: '0' }),
        animate('.15s ease-out', style({ opacity: '1' }))
    ]),
    transition('* => *', [
        animate('.15s ease-out', style({ opacity: '0' }))
    ])
]);
