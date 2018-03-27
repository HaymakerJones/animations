import {
    trigger,
    state,
    style,
    animate,
    transition,
    AnimationEntryMetadata
} from '@angular/core';

export const PopupAnimation: AnimationEntryMetadata =
    trigger('popOverState', [
        state('show', style({
            opacity: 1,
        })),
        state('hide', style({
            opacity: 0
        })),
        transition('show => hide', animate('700ms ease-out')),
        transition('hide => show', animate('700ms ease-in')),
    ]);