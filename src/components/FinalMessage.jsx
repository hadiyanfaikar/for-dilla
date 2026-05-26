import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';

const FinalMessage = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="relative z-10 w-full bg-white/70 backdrop-blur-md py-24 px-6 shadow-inner">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="max-w-4xl mx-auto bg-white/60 p-8 md:p-16 rounded-3xl shadow-xl text-center md:text-left"
      >
        <div className="space-y-6 text-lg md:text-xl text-gray-800 font-serif leading-relaxed italic border-l-4 border-romantic-rose pl-6">
          <p>
            "Aku tahu saat ini kita masih dalam tahap pendekatan. Kita masih belajar memahami satu sama lain, masih mengenal lebih dalam, dan masih berjalan pelan-pelan. Tapi dari semua proses itu, aku justru semakin yakin bahwa kamu berbeda."
          </p>
          <p>
            "Kamu bukan sekadar seseorang yang membuat hari-hariku terasa lebih baik. Kamu adalah seseorang yang membuatku ingin menjadi lebih baik. Kamu membuatku ingin berusaha, bertahan, dan memperjuangkan sesuatu dengan cara yang lebih dewasa."
          </p>
          <p>
            "Aku tidak ingin menjadikanmu sebagai pilihan sementara. Bagiku, kamu adalah satu-satunya orang yang ingin aku perjuangkan. Bukan karena aku terburu-buru, tapi karena semakin aku mengenalmu, semakin aku merasa bahwa hatiku tidak lagi mencari yang lain."
          </p>
          <p>
            "Kalau memang harus ada orang terakhir yang aku perjuangkan, aku ingin orang itu adalah kamu."
          </p>
          <p>
            "Aku tidak tahu bagaimana akhir dari perjalanan ini. Tapi aku tahu bahwa perasaan ini nyata. Aku ingin memperjuangkanmu dengan tulus, sabar, dan serius. Bukan untuk memaksamu, bukan untuk membebanimu, tapi untuk menunjukkan bahwa kamu benar-benar berarti bagiku."
          </p>
          <p className="pt-6 text-2xl md:text-3xl font-semibold text-romantic-red not-italic text-center mt-8">
            You’re not just someone special. You’re the one. The only one.
          </p>
        </div>
      </motion.div>
    </section>
  );
});

export default FinalMessage;
