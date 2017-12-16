
(function() {
	var editor;
	var delay;
	console.log("Loading... ")
	editor = CodeMirror(document.getElementById('code'), {
		value: "",
		lineNumbers: true,
		// mode: 'html',
		mode: 'javascript',
		theme: 'duotone-dark',
		
	});

	editor.on('change', function() {
			clearTimeout(delay);
      setTimeout(updatePreview, 300);
		})

	function updatePreview() {
    var previewFrame = document.getElementById('result');
    previewFrame.innerHTML = editor.getValue();
    console.log("editor:", editor);
    console.log("editor other:", editor.doc.children[0].lines);
    // var preview = previewFrame.contentDocument || previewFrame.contentWindow.document;
    // preview.open();
    // preview.write(editor.getValue());
    // preview.close();
  }
  setTimeout(updatePreview, 300);
})();