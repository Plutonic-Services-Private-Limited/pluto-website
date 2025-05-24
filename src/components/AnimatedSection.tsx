interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fadeIn' | 'fadeInUp' | 'fadeInDown' | 'fadeInLeft' | 'fadeInRight' | 'scale';
  delay?: number;
  duration?: number;
}

const AnimatedSection = ({
  children,
  className = '',
  animation = 'fadeInUp',
  delay = 0,
  duration = 0.5,
}: AnimatedSectionProps) => {
  const animationClass = `animate-${animation}`;
  const style = {
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`,
  };

  return (
    <div
      className={`${animationClass} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default AnimatedSection; 