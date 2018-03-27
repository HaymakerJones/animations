import { AnimationEntryMetadata } from '@angular/core';
import {
    trigger,
    state,
    style,
    transition,
    animate
} from '@angular/animations';

export const SpinAnimation: AnimationEntryMetadata =
    trigger('spinState', [
        state('back', style({ transform: 'rotateY(0deg)' })),
        state('front', style({ transform: 'rotateY(-360deg)' })),
        transition('* => *', animate('500ms ease'))
    ]);