import { AnimationEntryMetadata } from '@angular/core';
import {
    trigger,
    state,
    style,
    animate,
    transition,
    keyframes
} from '@angular/animations';

export const BlinkAnimation: AnimationEntryMetadata =
    trigger('blinkState', [
        transition('* => *', animate('200ms ease', keyframes([
            style({ transform: 'scale(1)' }),
            style({ transform: 'scale(0.1)' }),
            style({ transform: 'scale(1)' }),
        ])))
    ]);