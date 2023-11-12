const gr = gradio('http://0.0.0.0:7860');

gr.ready(() => {
    console.log('Gradio is ready!');
});
