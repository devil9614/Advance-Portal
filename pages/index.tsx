import { motion } from "framer-motion";

const IndexPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      Welcome to Next.js with Layout!
    </motion.div>
  );
};

export default IndexPage;
