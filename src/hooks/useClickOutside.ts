// src/hooks/useClickOutside.ts
import { useState, useEffect, useRef, RefObject } from 'react';

// Este hook nos permite detectar clics fuera de un elemento específico, ideal para menús desplegables, modales, etc.

// El hook recibe como argumento el estado inicial (si es visible o no)
export function useClickOutside(initialIsVisible: boolean) {
  // Estado para controlar la visibilidad
  const [isVisible, setIsVisible] = useState(initialIsVisible);
  // Ref para referenciar el elemento del cual queremos detectar clics fuera
  const ref = useRef<HTMLDivElement>(null);

  // Lógica para detectar el clic fuera del elemento
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Si el ref existe y el clic NO fue dentro del elemento referenciado...
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsVisible(false); // ...cerramos el elemento.
      }
    };

    // Añadimos el listener al documento
    document.addEventListener('mousedown', handleClickOutside);

    // Limpiamos el listener al desmontar el componente para evitar fugas de memoria
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]); // El efecto se vuelve a ejecutar si el ref cambia

  // El hook devuelve el ref, el estado de visibilidad y la función para cambiarlo
  return { ref, isVisible, setIsVisible };
}