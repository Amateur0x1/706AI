import { defaultValueCtx, Editor, rootCtx } from '@milkdown/core';
import { type FC } from 'react';

import { Milkdown, useEditor } from '@milkdown/react'
import { commonmark } from '@milkdown/preset-commonmark';
import { nord } from '@milkdown/theme-nord';

import '@milkdown/theme-nord/style.css';
import { listener, listenerCtx } from '@milkdown/plugin-listener';
import { Ctx } from '@milkdown/ctx';

interface ItemData {
    source_url: string;
    parent_id: number;
    author_id: number;
    markdown: string;
}

interface props {
    setText: (markdown: string) => void

    setCtx: (ctx: Ctx) => void
}

export const MilkdownEditor: FC<props> = ({ setText, setCtx }) => {
    useEditor((root) => {
        return Editor
            .make()
            .config(ctx => {
                ctx.set(rootCtx, document.querySelector('#editor'))
                ctx.set(defaultValueCtx, "Initial Markdown Content")
                ctx.get(listenerCtx).markdownUpdated((ctx, markdown, prevMarkdown) => {
                    setText(markdown);
                });
                setCtx(ctx)
            })
            .config(nord)
            .use(commonmark)
            .use(listener)
            ;;
    }, [])
    return <Milkdown />
}
