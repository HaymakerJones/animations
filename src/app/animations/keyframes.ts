import {
    trigger,
    state,
    style,
    animate,
    keyframes,
    transition,
    AnimationEntryMetadata
} from '@angular/core';

export const keyFramesAnimation: AnimationEntryMetadata =
    trigger('kState', [
        transition('* => move',
            animate('2000ms', keyframes([
                style({ transform: 'translateX(0) rotateY(0)', offset: 0 }),
                style({ transform: 'translateX(50%) rotateY(90deg)', offset: 0.33 }),
                style({ transform: 'translateY(-75%) rotateY(180deg)', offset: 0.66 }),
                style({ transform: 'translateX(-100%)', offset: 1.0 }),
            ]))
        )
    ]);