import React, { useRef, useEffect, useState } from 'react';
import '../styles/drawingGame.css';

interface DrawingGameProps {
    letter: string;
}

const DrawingGame: React.FC<DrawingGameProps> = ({ letter }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size
        canvas.width = 300;
        canvas.height = 300;

        // Setup canvas style
        ctx.strokeStyle = '#FF6B6B';
        ctx.lineWidth = 8;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        // Draw letter stencil
        ctx.font = '200px Comic Sans MS';
        ctx.fillStyle = '#eee';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(letter, canvas.width / 2, canvas.height / 2);

        setContext(ctx);
    }, [letter]);

    const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
        setIsDrawing(true);
        if (!context) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const rect = canvas.getBoundingClientRect();
        const x = 'touches' in e 
            ? e.touches[0].clientX - rect.left 
            : e.clientX - rect.left;
        const y = 'touches' in e 
            ? e.touches[0].clientY - rect.top 
            : e.clientY - rect.top;

        context.beginPath();
        context.moveTo(x, y);
    };

    const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
        if (!isDrawing || !context) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const rect = canvas.getBoundingClientRect();
        const x = 'touches' in e 
            ? e.touches[0].clientX - rect.left 
            : e.clientX - rect.left;
        const y = 'touches' in e 
            ? e.touches[0].clientY - rect.top 
            : e.clientY - rect.top;

        context.lineTo(x, y);
        context.stroke();
    };

    const stopDrawing = () => {
        setIsDrawing(false);
        if (!context) return;
        context.closePath();
    };

    const clearCanvas = () => {
        if (!context || !canvasRef.current) return;
        context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        
        // Redraw the stencil
        context.font = '200px Comic Sans MS';
        context.fillStyle = '#eee';
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillText(letter, canvasRef.current.width / 2, canvasRef.current.height / 2);
    };

    return (
        <div className="drawing-game">
            <h2>Practice Writing: {letter}</h2>
            <div className="canvas-container">
                <canvas
                    ref={canvasRef}
                    onMouseDown={startDrawing}
                    onMouseMove={draw}
                    onMouseUp={stopDrawing}
                    onMouseLeave={stopDrawing}
                    onTouchStart={startDrawing}
                    onTouchMove={draw}
                    onTouchEnd={stopDrawing}
                />
            </div>
            <button onClick={clearCanvas} className="clear-button">
                Clear
            </button>
        </div>
    );
};

export default DrawingGame;