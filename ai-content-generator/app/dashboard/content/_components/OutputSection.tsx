import React, { useRef } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

function OutputSection() {
    const editorRef:any = useRef();
  return (
    <div className='bg-white shadow-lg border rounded-lg'>
        <div className='flex justify-between items-center p-5'>
            <h2 className='font-medium text-lg'>Your result</h2>
            <Button className='flex gap-2'><Copy className='w-4 h-4'/>Copy</Button>
        </div>
        <Editor
            ref={editorRef}
            initialValue="Your Result will appear here"
            // previewStyle="vertical"
            height="600px"
            initialEditType="wysiwyg"
            useCommandShortcut={true}
            onChange={()=>console.log(editorRef.current.getInstance().getMarkdown())}
        />
    </div>
  )
}

export default OutputSection