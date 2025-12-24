export default function MeltingDivider({ className, color = "#5D4037", invert = false }: { className?: string, color?: string, invert?: boolean }) {
    return (
        <div className={`w-full overflow-hidden leading-[0] ${className}`}>
            <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
                className={`relative block w-[calc(100%+1.3px)] h-[60px] md:h-[100px] ${invert ? 'rotate-180' : ''}`}
            >
                <path
                    d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                    fill={color}
                    className="shape-fill"
                    opacity="1"
                ></path>
                <path
                    d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05c99.41,75.32,252.36,43.06,350.33,12.78,111-34.33,186-90,296-63.5,84,20.25,144,73,234,60.5,67-9.3,130-49,178-95V0Z"
                    fill={color}
                    opacity="0.5"
                ></path>
            </svg>
        </div>
    );
}
