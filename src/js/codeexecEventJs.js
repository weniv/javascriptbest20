function downloadNotebook() {

    const notebook = editor.getValue();

    const blob = new Blob([notebook], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.download = 'notebook.js';
    a.href = url;
    a.click();
}