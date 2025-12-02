import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function usePageTransition() {
  const [transitioning, setTransitioning] = useState(false);
  const navigate = useNavigate();

  const goWithTransition = (path: string) => {
    setTransitioning(true);

    setTimeout(() => {
      navigate(path);
      setTransitioning(false);
    }, 400);
  };

  return { transitioning, goWithTransition };
}
