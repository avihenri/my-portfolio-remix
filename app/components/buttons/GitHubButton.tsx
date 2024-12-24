import { motion } from 'framer-motion';

export const GitHubButton = () => {
    return (
      <button aria-label="Check my GitHub" >
        <a href="https://github.com/avihenri" target="_blank" rel="noreferrer">
          <motion.svg
            viewBox="0 0 16 16"
            fill="currentColor"
            height="1em"
            width="1em"
            className="w-6 h-6 "
            whileHover="hover"
            variants={{
                initial: { scale: 1 },
                hover: { scale: 1.1 },
            }}
            initial="initial"
          >
            <motion.path
              d="M8 .198a8 8 0 00-2.529 15.591c.4.074.547-.174.547-.385 0-.191-.008-.821-.011-1.489-2.226.484-2.695-.944-2.695-.944-.364-.925-.888-1.171-.888-1.171-.726-.497.055-.486.055-.486.803.056 1.226.824 1.226.824.714 1.223 1.872.869 2.328.665.072-.517.279-.87.508-1.07-1.777-.202-3.645-.888-3.645-3.954 0-.873.313-1.587.824-2.147-.083-.202-.357-1.015.077-2.117 0 0 .672-.215 2.201.82A7.672 7.672 0 018 4.066c.68.003 1.365.092 2.004.269 1.527-1.035 2.198-.82 2.198-.82.435 1.102.162 1.916.079 2.117.513.56.823 1.274.823 2.147 0 3.073-1.872 3.749-3.653 3.947.287.248.543.735.543 1.481 0 1.07-.009 1.932-.009 2.195 0 .213.144.462.55.384A8 8 0 008.001.196z"
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2 }}
            />
          </motion.svg>
        </a>
      </button>
    );
  };
  