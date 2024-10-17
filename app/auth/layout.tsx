import React, { Suspense } from 'react';

const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <main className={"min-h-screen flex px-4 items-center justify-center w-full bg-gray-400"}>
      <Suspense fallback={<div>Loading...</div>}>
        {children}
      </Suspense>
    </main>
  );
};

export default AuthLayout;