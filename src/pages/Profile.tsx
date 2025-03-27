
import React from 'react';
import { motion } from "framer-motion";
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import ProfileForm from '@/components/profile/ProfileForm';

const Profile: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      
      <main className="flex-grow pt-32 pb-20 container-padding container">
        <div className="max-w-4xl mx-auto mb-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="title-chip mx-auto">Personal Financial Profile</div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Create Your Financial Profile</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Enter your financial details to receive personalized recommendations. Your information helps us tailor our advice to your unique situation.
            </p>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ProfileForm />
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;
