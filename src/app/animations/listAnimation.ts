import {
    AnimationEntryMetadata
} from '@angular/core';

import {
    query,
    stagger,
    trigger,
    transition,
    animate,
    style,
} from '@angular/animations';

export const ListAnimation: AnimationEntryMetadata =
    trigger('listAnimation', [
        transition('* => *', [
            query('.card-entry', style({ transform: 'translateX(-100%)' })),
            query('.card-entry',
                stagger('600ms', [
                    animate('900ms', style({ transform: 'translateX(0)' }))
                ])),
        ])
    ]);