import {
    trigger,
    state,
    style,
    animate,
    transition,
    AnimationEntryMetadata
} from '@angular/core';

export const MultistateAnimation: AnimationEntryMetadata =
    trigger('cardState', [
        state('move', style({
            transform: 'translateX( 100% )'
        })),
        state('enlarge', style({
            transform: 'scale(1.5)'
        })),
        state('spin', style({
            transform: 'rotateY( 180deg ) rotateZ(90deg)'
        })),
        state('reset', style({
            transform: 'translateX(0)'
        })),
        transition('* => *', animate('500ms ease'))
    ]);