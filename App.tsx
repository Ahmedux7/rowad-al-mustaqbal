

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import { 
    ClockIcon, CertificateIcon, UserGroupIcon, CheckCircleIcon, StarIcon, QuoteIcon,
    LinkedInIcon, TikTokIcon, FacebookIcon, YouTubeIcon, InstagramIcon, WhatsAppIcon, 
    ArrowLeftIcon
} from './components/Icons';
import CoursesPage from './pages/CoursesPage';
import InstructorsPage from './pages/InstructorsPage';
import PricingPage from './pages/PricingPage';
import ContactPage from './pages/ContactPage';
import CourseCard from './components/CourseCard';
import InstructorCard from './components/InstructorCard';
import InstructorProfilePage from './pages/InstructorProfilePage';
import UserProfilePage from './pages/UserProfilePage';
import MyCoursesPage from './pages/MyCoursesPage';
import CertificatesPage from './pages/CertificatesPage';
import MyCertificatesPage from './pages/MyCertificatesPage';
import SettingsPage from './pages/SettingsPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import AdminLayout from './layouts/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import ManageCourses from './pages/admin/ManageCourses';
import ManageInstructors from './pages/admin/ManageInstructors';
import ManageUsers from './pages/admin/ManageUsers';
import ManagePricing from './pages/admin/ManagePricing';
import ManageContact from './pages/admin/ManageContact';
import SendNotification from './pages/admin/SendNotification';
import AdminLoginPage from './pages/admin/AdminLoginPage';
import { CourseDetailPage } from './pages/CourseDetailPage';
import CertificatePage from './pages/CertificatePage';
import Logo from './components/Logo';
import WelcomePopup from './components/WelcomePopup';
import RegistrationSuccessPopup from './components/RegistrationSuccessPopup';
import * as db from './db';

// --- Section Components ---

const Hero = ({setPage}) => {
    const features = [
        'حصص فردية مباشرة',
        'مناهج معتمدة دولياً',
        'نخبة من أفضل المدربين'
    ];

    return (
        <section className="bg-white dark:bg-slate-900 overflow-x-hidden">
            <div className="container mx-auto px-6 py-16 lg:py-24">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-800 dark:text-slate-100 leading-normal opacity-0 animate-fade-in-up" style={{animationDelay: '100ms'}}>
                        جيل اليوم
                        <br />
                        <span className="inline-block mt-2">هم <span className="text-white bg-primary-600 rounded-lg px-4 py-1 inline-block">قادة التكنولوجيا</span> غدًا</span>
                    </h1>
                    <ul className="mt-10 flex flex-wrap justify-center gap-x-8 sm:gap-x-12 gap-y-4 text-lg text-slate-600 dark:text-slate-400 opacity-0 animate-fade-in-up" style={{animationDelay: '300ms'}}>
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-center">
                                <CheckCircleIcon className="w-7 h-7 text-primary-500 ml-3 flex-shrink-0" />
                                <p>{feature}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

const WhyUs = () => (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 text-center">
            <div className="opacity-0 animate-fade-in-up">
                <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-100">لماذا رواد المستقبل؟</h2>
                <p className="text-lg text-slate-500 dark:text-slate-400 mt-2 mb-12 max-w-2xl mx-auto">نحن نؤمن بأن كل طفل لديه القدرة على أن يصبح قائدًا ومبتكرًا. منصتنا مصممة لتنمية هذه المهارات.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow opacity-0 animate-fade-in-up" style={{animationDelay: '200ms'}}><div className="mx-auto bg-primary-100 text-primary-600 w-16 h-16 flex items-center justify-center rounded-full mb-4"><UserGroupIcon /></div><h3 className="text-xl font-bold mb-2 dark:text-white">مرشدون ملهمون</h3><p className="dark:text-slate-400">مدربون متخصصون في تعليم الأطفال، يحولون المفاهيم المعقدة إلى مغامرات شيقة.</p></div>
                <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow opacity-0 animate-fade-in-up" style={{animationDelay: '300ms'}}><div className="mx-auto bg-primary-100 text-primary-600 w-16 h-16 flex items-center justify-center rounded-full mb-4"><ClockIcon /></div><h3 className="text-xl font-bold mb-2 dark:text-white">محتوى تفاعلي</h3><p className="dark:text-slate-400">دروس ومشاريع تفاعلية مصممة لإبقاء الأطفال متحمسين ومشاركين في عملية التعلم.</p></div>
                <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow opacity-0 animate-fade-in-up" style={{animationDelay: '400ms'}}><div className="mx-auto bg-primary-100 text-primary-600 w-16 h-16 flex items-center justify-center rounded-full mb-4"><CertificateIcon /></div><h3 className="text-xl font-bold mb-2 dark:text-white">شهادات وجوائز</h3><p className="dark:text-slate-400">يحصل الأطفال على شارات تقدير وشهادات إتمام تزيد من ثقتهم بأنفسهم.</p></div>
            </div>
        </div>
    </section>
);

const CoursesSection = ({courses, instructors, setPage, onViewCourse}) => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4 text-center">
                <div className="opacity-0 animate-fade-in-up">
                    <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-100">مغامراتنا التعليمية</h2>
                    <p className="text-lg text-slate-500 dark:text-slate-400 mt-2 mb-8 max-w-2xl mx-auto">استكشف مغامراتنا في البرمجة وريادة الأعمال والقيادة، وابدأ رحلتك نحو المستقبل.</p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {courses.slice(0, 4).map((course, index) => {
                        const instructor = instructors.find(inst => inst.name === course.instructor);
                        return <div key={course.id} className="opacity-0 animate-fade-in-up" style={{animationDelay: `${200 + index * 100}ms`}}><CourseCard course={course} instructor={instructor} onViewCourse={onViewCourse} /></div>
                    })}
                </div>
                <button onClick={() => setPage('courses')} className="mt-12 bg-white dark:bg-slate-700 dark:text-slate-200 dark:border-slate-600 dark:hover:bg-slate-600 text-slate-700 font-bold py-3 px-8 rounded-lg shadow-md border border-slate-200 hover:bg-slate-50 transition-colors opacity-0 animate-fade-in-up" style={{animationDelay: '600ms'}}>عرض جميع المغامرات</button>
            </div>
        </section>
    );
};

const InstructorsSection = ({instructors, setPage, onViewInstructor}) => (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 text-center">
            <div className="opacity-0 animate-fade-in-up">
                <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-100">مرشدون الأبطال</h2>
                <p className="text-lg text-slate-500 dark:text-slate-400 mt-2 mb-12 max-w-2xl mx-auto">تعرف على المرشدين الملهمين الذين سيرافقون أطفالك في رحلتهم التعليمية.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {instructors.slice(0,3).map((inst, index) => (
                    <div key={inst.id} className="opacity-0 animate-fade-in-up" style={{animationDelay: `${200 + index * 100}ms`}}>
                        <InstructorCard instructor={inst} onViewProfile={onViewInstructor} />
                    </div>
                ))}
            </div>
             <button onClick={() => setPage('instructors')} className="mt-12 bg-white dark:bg-slate-700 dark:text-slate-200 dark:border-slate-600 dark:hover:bg-slate-600 text-slate-700 font-bold py-3 px-8 rounded-lg shadow-md border border-slate-200 hover:bg-slate-50 transition-colors opacity-0 animate-fade-in-up" style={{animationDelay: '500ms'}}>عرض جميع المرشدين</button>
        </div>
    </section>
);

const StatsAndPartnersSection = () => {
    const stats = [
        { value: '+130 ألف خريج', label: 'خبرة في تعليم الأطفال' },
        { value: '+6,000,000', label: 'ساعات تدريبية تم تقديمها' },
        { value: '+250,000', label: 'أب وأم سعداء بنجاحهم معنا' },
        { value: '4.9/5', label: 'معدل تقييم الطلاب لنا' }
    ];

    return (
        <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto bg-white dark:bg-slate-800 p-8 sm:p-12 rounded-2xl shadow-xl border dark:border-slate-700 opacity-0 animate-scale-in">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {stats.map((stat, index) => (
                            <div key={index} className="opacity-0 animate-fade-in-up" style={{animationDelay: `${100 * index}ms`}}>
                                <h3 className="text-3xl lg:text-4xl font-black text-primary-600 dark:text-primary-400">{stat.value}</h3>
                                <p className="text-slate-500 dark:text-slate-400 mt-1 text-sm">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const PortfolioSection = () => (
    <section className="py-20 bg-white dark:bg-slate-900 relative overflow-hidden">
         <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[50rem] h-[50rem] bg-primary-500/10 dark:bg-primary-500/5 rounded-full blur-3xl z-0"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-[40rem] h-[40rem] bg-accent-500/10 dark:bg-accent-500/5 rounded-full blur-3xl z-0"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-orange-400/50 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-blue-400/50 rounded-full blur-2xl"></div>

        <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto opacity-0 animate-fade-in-up">
                <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-100">كل طالب يعمل على إنشاء ملف شخصي جاهز لمستقبله المهني.</h2>
                <p className="text-lg text-slate-500 dark:text-slate-400 mt-4">الملف، مثل موقعك الشخصي، يظهر مهاراتك، مشاريعك، وشهاداتك. جزء من آلياتنا وطرقنا هو أن وقت وشراكه مع الكلية وبرامج الصيفية</p>
            </div>
            <div className="mt-12 opacity-0 animate-fade-in-up" style={{animationDelay: '200ms'}}>
                 <div 
                    className="bg-white dark:bg-slate-800 max-w-3xl mx-auto rounded-lg shadow-2xl p-8 border-4 border-primary-500 relative overflow-hidden transform hover:scale-105 transition-transform duration-500"
                >
                    <div className="absolute inset-0 bg-repeat bg-center opacity-5" style={{backgroundImage: 'url("https://www.transparenttextures.com/patterns/az-subtle.png")'}}></div>
                    <div className="relative z-10 text-center">
                        <div className="flex justify-center items-center mb-4">
                            <Logo className="text-3xl font-bold text-slate-700 dark:text-slate-200" />
                        </div>
                        <p className="text-lg text-slate-500 dark:text-slate-400">شهادة إتمام</p>
                        <h1 className="text-4xl md:text-5xl font-black text-primary-600 dark:text-primary-400 my-4 md:my-6" style={{fontFamily: "'Cairo', sans-serif"}}>Certificate of Completion</h1>
                        
                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mt-6">
                            تشهد منصة رواد المستقبل بأن
                        </p>
                        <p className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 my-3 tracking-wide">
                            البطل الصغير
                        </p>
                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300">
                            قد أتم بنجاح متطلبات مغامرة
                        </p>
                        <p className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 mt-3 mb-8">
                            "مغامرات بايثون: اصنع لعبتك الأولى"
                        </p>

                        <div className="flex justify-between items-center mt-10 pt-6 border-t-2 border-slate-200 dark:border-slate-700">
                            <div className="text-center">
                                <p className="font-bold text-slate-700 dark:text-slate-200">كابتن كود</p>
                                <p className="text-sm text-slate-500 dark:text-slate-400 border-t-2 border-slate-300 dark:border-slate-600 pt-1 mt-1">المرشد</p>
                            </div>
                             <div className="text-center">
                                 <CertificateIcon className="w-16 h-16 md:w-20 md:h-20 text-accent-400" />
                            </div>
                            <div className="text-center">
                                <p className="font-bold text-slate-700 dark:text-slate-200">10 أكتوبر 2025</p>
                                <p className="text-sm text-slate-500 dark:text-slate-400 border-t-2 border-slate-300 dark:border-slate-600 pt-1 mt-1">تاريخ الإتمام</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);


const Testimonials = ({testimonials}) => {
    if (!testimonials || testimonials.length < 2) {
        return null;
    }
    
    return (
        <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
            <div className="container mx-auto px-4 text-center">
                <div className="opacity-0 animate-fade-in-up">
                    <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-100">آراء أولياء الأمور</h2>
                    <p className="text-lg text-slate-500 dark:text-slate-400 mt-2 mb-12 max-w-2xl mx-auto">نحن فخورون بالتأثير الإيجابي الذي نحدثه في حياة الأطفال وأسرهم. استمع لبعض قصصهم.</p>
                </div>
                <div className="relative">
                     <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg text-right relative opacity-0 animate-fade-in-up" style={{animationDelay: '200ms'}}>
                            <QuoteIcon />
                            <p className="my-4 text-slate-600 dark:text-slate-400">{testimonials[0].text}</p>
                            <div className="flex items-center pt-4 border-t dark:border-slate-700">
                                 <img src={testimonials[0].image} alt={testimonials[0].name} className="w-12 h-12 rounded-full"/>
                                <div className="mr-4">
                                    <p className="font-bold dark:text-white">{testimonials[0].name}</p>
                                    <div className="flex text-accent-400">
                                        {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                                    </div>
                                </div>
                            </div>
                        </div>
                         <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg text-right relative hidden md:block opacity-0 animate-fade-in-up" style={{animationDelay: '300ms'}}>
                            <QuoteIcon />
                            <p className="my-4 text-slate-600 dark:text-slate-400">{testimonials[1].text}</p>
                            <div className="flex items-center pt-4 border-t dark:border-slate-700">
                                 <img src={testimonials[1].image} alt={testimonials[1].name} className="w-12 h-12 rounded-full"/>
                                <div className="mr-4">
                                    <p className="font-bold dark:text-white">{testimonials[1].name}</p>
                                    <div className="flex text-accent-400">
                                        {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                 <button className="mt-12 bg-primary-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg shadow-primary-500/30 hover:bg-primary-700 opacity-0 animate-fade-in-up" style={{animationDelay: '400ms'}}>شاركنا تجربتك</button>
            </div>
        </section>
    );
};

const Cta = ({setPage, currentUser}) => (
    <section className="py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
            <div className="opacity-0 animate-fade-in-up">
                <h2 className="text-4xl font-bold">{currentUser ? `مستعد لمغامرة جديدة يا ${currentUser.name.split(' ')[0]}؟` : "هل طفلك مستعد ليصبح من رواد المستقبل؟"}</h2>
                <p className="text-lg text-primary-200 mt-2 mb-8 max-w-2xl mx-auto">{currentUser ? "استكشف أحدث المغامرات التعليمية وانطلق في رحلة جديدة من الإبداع." : "انضموا إلينا اليوم وابدأوا رحلة مليئة بالتعلم والإبداع والمرح. بناء قادة الغد يبدأ من هنا!"}</p>
            </div>
            <div className="flex justify-center space-x-4 space-x-reverse opacity-0 animate-fade-in-up" style={{animationDelay: '200ms'}}>
                {currentUser ? (
                     <button onClick={() => setPage('myCourses')} className="bg-accent-400 text-slate-800 font-bold py-3 px-8 rounded-lg hover:bg-accent-500 transition-colors flex items-center">
                        <span>اذهب إلى مغامراتي</span>
                        <ArrowLeftIcon className="mr-2" />
                    </button>
                ) : (
                    <button onClick={() => setPage('register')} className="bg-accent-400 text-slate-800 font-bold py-3 px-8 rounded-lg hover:bg-accent-500 transition-colors flex items-center">
                        <span>أنشئ حساباً لابنك</span>
                        <ArrowLeftIcon className="mr-2" />
                    </button>
                )}
                <button onClick={() => setPage('courses')} className="bg-primary-700 text-white font-bold py-3 px-8 rounded-lg hover:bg-primary-800">تصفح المغامرات</button>
            </div>
        </div>
    </section>
);


const Footer = ({setPage}) => (
    <footer className="bg-slate-800 dark:bg-slate-950 text-slate-300 pt-16 pb-8">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
                <div className="md:col-span-1">
                    <Logo className="text-2xl font-bold text-white mb-4 cursor-pointer" onClick={() => setPage('home')} />
                    <p className="text-sm text-slate-400 mb-4">منصتك الأولى لإعداد جيل المستقبل من المبرمجين ورواد الأعمال والقادة. تعلم، ابتكر، وقد.</p>
                    <div className="flex space-x-4 space-x-reverse">
                        <a href="#" className="text-slate-400 hover:text-white"><LinkedInIcon /></a>
                        <a href="#" className="text-slate-400 hover:text-white"><TikTokIcon /></a>
                        <a href="#" className="text-slate-400 hover:text-white"><FacebookIcon /></a>
                        <a href="#" className="text-slate-400 hover:text-white"><YouTubeIcon /></a>
                        <a href="#" className="text-slate-400 hover:text-white"><InstagramIcon /></a>
                    </div>
                </div>
                <div>
                     <h4 className="font-bold text-white mb-4">تعلم</h4>
                     <ul className="space-y-2 text-sm">
                         <li><a href="#" onClick={(e) => {e.preventDefault(); setPage('home')}} className="text-slate-400 hover:text-white">عن المنصة</a></li>
                         <li><a href="#" onClick={(e) => {e.preventDefault(); setPage('courses')}} className="text-slate-400 hover:text-white">المغامرات</a></li>
                         <li><a href="#" onClick={(e) => {e.preventDefault(); setPage('contact')}} className="text-slate-400 hover:text-white">اتصل بنا</a></li>
                         <li><a href="#" className="text-slate-400 hover:text-white">الوظائف</a></li>
                     </ul>
                </div>
                 <div>
                     <h4 className="font-bold text-white mb-4">الموارد</h4>
                     <ul className="space-y-2 text-sm">
                         <li><a href="#" className="text-slate-400 hover:text-white">مركز المساعدة</a></li>
                         <li><a href="#" className="text-slate-400 hover:text-white">الأسئلة الشائعة</a></li>
                         <li><a href="#" onClick={(e) => {e.preventDefault(); setPage('courses')}} className="text-slate-400 hover:text-white">آخر المغامرات القادمة</a></li>
                     </ul>
                </div>
                 <div>
                     <h4 className="font-bold text-white mb-4">اشترك في النشرة البريدية</h4>
                     <p className="text-sm text-slate-400 mb-4">احصل على آخر الأخبار والتحديثات عن مغامراتنا الجديدة.</p>
                     <form className="flex space-x-2 space-x-reverse" onSubmit={(e) => e.preventDefault()}>
                        <input type="email" placeholder="البريد الإلكتروني" className="bg-slate-700 dark:bg-slate-800 text-white placeholder-slate-400 px-3 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-primary-500"/>
                        <button type="submit" className="bg-primary-600 text-white font-bold py-2 px-4 rounded-md hover:bg-primary-700">اشترك</button>
                     </form>
                </div>
            </div>
            <div className="mt-12 pt-8 border-t border-slate-700 dark:border-slate-800 text-center text-sm text-slate-500">
                <p>&copy; 2025 رواد المستقبل. جميع الحقوق محفوظة.</p>
                 <p className="mt-2"><a href="#" className="hover:text-white">الشروط والأحكام</a> &middot; <a href="#" className="hover:text-white">سياسة الخصوصية</a></p>
            </div>
        </div>
    </footer>
);

const WhatsAppButton = () => (
    <button className="fixed bottom-6 left-6 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors z-20">
        <WhatsAppIcon className="w-8 h-8"/>
    </button>
);


const HomePage = ({ courses, instructors, testimonials, setPage, onViewInstructor, onViewCourse, currentUser, pricingInfo, onIncrementCopyCount }) => (
    <>
        <Hero setPage={setPage} />
        <WhyUs />
        <CoursesSection courses={courses} instructors={instructors} setPage={setPage} onViewCourse={onViewCourse} />
        <InstructorsSection instructors={instructors} setPage={setPage} onViewInstructor={onViewInstructor} />
        {!currentUser && <PricingPage pricingInfo={pricingInfo} onIncrementCopyCount={onIncrementCopyCount} setPage={setPage} />}
        <StatsAndPartnersSection />
        <PortfolioSection />
        <Testimonials testimonials={testimonials} />
        <Cta setPage={setPage} currentUser={currentUser} />
    </>
);


const App: React.FC = () => {
    const [page, setPage] = useState('home');
    const [currentUser, setCurrentUser] = useState<any | null>(null);
    const [selectedInstructor, setSelectedInstructor] = useState(null);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [selectedCertificateCourse, setSelectedCertificateCourse] = useState(null);
    const [theme, setTheme] = useState('light');
    const [showWelcomePopup, setShowWelcomePopup] = useState(false);
    const [showRegistrationSuccessPopup, setShowRegistrationSuccessPopup] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState<any[]>([]);

    // Data states
    const [courses, setCourses] = useState<any[]>([]);
    const [instructors, setInstructors] = useState<any[]>([]);
    const [testimonials, setTestimonials] = useState<any[]>([]);
    const [users, setUsers] = useState<any[]>([]);
    const [notifications, setNotifications] = useState<any[]>([]);
    const [adminStats, setAdminStats] = useState({ users: 0, courses: 0, instructors: 0 });
    const [pricingInfo, setPricingInfo] = useState<any>(null);
    const [contactInfo, setContactInfo] = useState<any>(null);
    const [contactRequests, setContactRequests] = useState<any[]>([]);
    const [badges, setBadges] = useState<any[]>([]);

    const refreshData = async () => {
        setIsLoading(true);
        const [
            coursesData, instructorsData, testimonialsData, usersData, 
            notificationsData, statsData, pricingData, sessionUser, 
            badgesData, contactInfoData, contactRequestsData
        ] = await Promise.all([
            db.getData('courses'),
            db.getData('instructors'),
            db.getData('testimonials'),
            db.getData('users'),
            db.getData('notifications'),
            db.getStats(),
            db.getPricingInfo(),
            db.getSession(),
            db.getData('badges'),
            db.getContactInfo(),
            db.getData('contactRequests')
        ]);
        
        setCourses(coursesData as any[]);
        setInstructors(instructorsData as any[]);
        setTestimonials(testimonialsData as any[]);
        setUsers(usersData as any[]);
        setNotifications(notificationsData as any[]);
        setAdminStats(statsData as { users: number; courses: number; instructors: number; });
        setPricingInfo(pricingData as any);
        setBadges(badgesData as any[]);
        setContactInfo(contactInfoData as any);
        setContactRequests(contactRequestsData as any[]);
        if (sessionUser) {
            setCurrentUser(sessionUser as any);
        }
        setIsLoading(false);
    };
    
    useEffect(() => {
        if (searchQuery.length > 1) {
            const results = courses.filter(course => 
                course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                course.instructor.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setSearchResults(results);
        } else {
            setSearchResults([]);
        }
    }, [searchQuery, courses]);
    
    // Theme management
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (savedTheme) {
            setTheme(savedTheme);
        } else if (systemPrefersDark) {
            setTheme('dark');
        }
    }, []);

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove('light', 'dark');
        root.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };


    useEffect(() => {
        db.init();
        refreshData();
    }, []);

    const handleLogin = async (email, password) => {
        const user = await db.login(email, password);
        if (user) {
            setCurrentUser(user as any);
            setShowWelcomePopup(true);
            setPage('home');
            return { success: true };
        }
        return { success: false, message: 'البريد الإلكتروني أو كلمة المرور غير صحيحة.' };
    };
    
    const handleAdminLogin = async (email, password) => {
        const user: any = await db.login(email, password);
        if (user && user.role === 'admin') {
            setCurrentUser(user);
            setPage('adminDashboard');
            return { success: true };
        }
        return { success: false, message: 'بيانات اعتماد المدير غير صالحة.' };
    };

    const handleRegister = async (name, email, password): Promise<{ success: boolean; message?: string; user?: any; }> => {
        const result: any = await db.register({ name, email, password });
        if (result.success) {
            await refreshData();
        }
        return result;
    };
    
    const handleLoginAfterVerification = (user) => {
        db.establishSession(user);
        setCurrentUser(user);
        setShowRegistrationSuccessPopup(true);
        setPage('home');
    };


    const handleLogout = () => {
        db.logout();
        setCurrentUser(null);
        setPage('home');
    };
    
    const handleUpdateUser = async (updatedUser) => {
        const result = await db.updateUser(updatedUser);
        if (result.success && 'user' in result && result.user) {
            setCurrentUser(result.user);
            await refreshData();
        }
        return result;
    };
    
    // --- Admin Handlers ---
    const handleAddCourse = async (course) => { 
        const result = await db.addCourse(course);
        if (result.success) {
            await refreshData();
        }
        return result;
    };
    const handleUpdateCourse = async (course) => {
        const result = await db.updateCourse(course);
        if (result.success) {
            await refreshData();
        }
        return result;
    };
    const handleDeleteCourse = async (id) => { await db.deleteCourse(id); await refreshData(); };
    
    const handleAddInstructor = async (inst) => { await db.addInstructor(inst); await refreshData(); };
    const handleUpdateInstructor = async (inst) => { await db.updateInstructor(inst); await refreshData(); };
    const handleDeleteInstructor = async (id) => { await db.deleteInstructor(id); await refreshData(); };
    
    const handleAddUser = async (user) => { 
        const result = await db.addUser(user);
        if (result.success) {
            await refreshData();
        }
        return result; 
    };

    const handleAdminUpdateUser = async (updatedUser) => {
        const result = await db.updateUser(updatedUser);
        if (result.success && 'user' in result && result.user) {
            if (currentUser && currentUser.id === result.user.id) {
                 setCurrentUser(result.user);
            }
            await refreshData();
        }
        return result;
    };

    const handleDeleteUser = async (id) => { await db.deleteUser(id); await refreshData(); };

    const handleUpdatePricingInfo = async (info) => { await db.updatePricingInfo(info); await refreshData(); };
    const handleIncrementCopyCount = async () => { await db.incrementCopyCount(); await refreshData(); };
    
    const handleAddContactRequest = async (request) => { await db.addContactRequest(request); await refreshData(); };
    const handleDeleteContactRequest = async (id) => { await db.deleteContactRequest(id); await refreshData(); };
    const handleUpdateContactInfo = async (info) => { await db.updateContactInfo(info); await refreshData(); };

    const handleSendNotification = async (notif) => { await db.addNotification(notif); await refreshData(); };

    const handleViewInstructor = (instructor) => {
        setSelectedInstructor(instructor);
        setPage('instructorProfile');
        window.scrollTo(0, 0);
    };

    const handleViewCourse = (course) => {
        setSearchQuery('');
        setSearchResults([]);
        setSelectedCourse(course);
        setPage('courseDetail');
        window.scrollTo(0, 0);
    };

    const handleViewCertificate = (course) => {
        setSelectedCertificateCourse(course);
        setPage('certificate');
        window.scrollTo(0, 0);
    };

    const handleCloseWelcomePopup = () => {
        setShowWelcomePopup(false);
    };

    const handleCloseRegistrationSuccessPopup = () => {
        setShowRegistrationSuccessPopup(false);
    };

    const renderAdminPage = () => {
        switch (page) {
            case 'adminDashboard':
                return <AdminDashboard stats={adminStats} courses={courses} />;
            case 'manageCourses':
                return <ManageCourses courses={courses} onAdd={handleAddCourse} onUpdate={handleUpdateCourse} onDelete={handleDeleteCourse} />;
            case 'manageInstructors':
                return <ManageInstructors instructors={instructors} onAdd={handleAddInstructor} onUpdate={handleUpdateInstructor} onDelete={handleDeleteInstructor} />;
            case 'manageUsers':
                return <ManageUsers users={users} onAdd={handleAddUser} onUpdate={handleAdminUpdateUser} onDelete={handleDeleteUser} />;
            case 'managePricing':
                return <ManagePricing pricingInfo={pricingInfo} onUpdate={handleUpdatePricingInfo} />;
            case 'manageContact':
                return <ManageContact contactInfo={contactInfo} contactRequests={contactRequests} onUpdateInfo={handleUpdateContactInfo} onDeleteRequest={handleDeleteContactRequest} />;
            case 'sendNotification':
                return <SendNotification onSend={handleSendNotification} setPage={setPage} />;
            default:
                return <AdminDashboard stats={adminStats} courses={courses} />;
        }
    };
    
    const renderPage = () => {
        if (isLoading) {
            return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
        }

        const protectedPages = ['userProfile', 'myCourses', 'certificates', 'my-certificates', 'settings', 'certificate'];
        const adminPages = ['adminDashboard', 'manageCourses', 'manageInstructors', 'manageUsers', 'sendNotification', 'managePricing', 'manageContact'];

        if (adminPages.includes(page)) {
            if (currentUser && currentUser.role === 'admin') {
                return (
                    <AdminLayout page={page} setPage={setPage} currentUser={currentUser}>
                        {renderAdminPage()}
                    </AdminLayout>
                );
            }
            return <AdminLoginPage onLogin={handleAdminLogin} setPage={setPage} />;
        }

        if (!currentUser && protectedPages.includes(page)) {
            return <LoginPage onLogin={handleLogin} setPage={setPage} />;
        }
        
        if (currentUser && (page === 'login' || page === 'register' || page === 'forgotPassword')) {
            return <HomePage courses={courses} instructors={instructors} testimonials={testimonials} setPage={setPage} onViewInstructor={handleViewInstructor} onViewCourse={handleViewCourse} currentUser={currentUser} pricingInfo={pricingInfo} onIncrementCopyCount={handleIncrementCopyCount} />;
        }

        switch (page) {
            case 'home':
                return <HomePage courses={courses} instructors={instructors} testimonials={testimonials} setPage={setPage} onViewInstructor={handleViewInstructor} onViewCourse={handleViewCourse} currentUser={currentUser} pricingInfo={pricingInfo} onIncrementCopyCount={handleIncrementCopyCount} />;
            case 'courses':
                return <CoursesPage courses={courses} instructors={instructors} setPage={setPage} onViewCourse={handleViewCourse} />;
            case 'instructors':
                return <InstructorsPage instructors={instructors} testimonials={testimonials} onViewInstructor={handleViewInstructor} />;
            case 'pricing':
                return <PricingPage pricingInfo={pricingInfo} onIncrementCopyCount={handleIncrementCopyCount} setPage={setPage} />;
            case 'contact':
                return <ContactPage contactInfo={contactInfo} onAddRequest={handleAddContactRequest} />;
            case 'login':
                return <LoginPage onLogin={handleLogin} setPage={setPage} />;
            case 'register':
                return <RegisterPage onRegister={handleRegister} setPage={setPage} onVerificationSuccess={handleLoginAfterVerification} />;
            case 'forgotPassword':
                return <ForgotPasswordPage setPage={setPage} />;
            case 'courseDetail':
                return selectedCourse ? 
                    <CourseDetailPage 
                        course={selectedCourse}
                        instructor={instructors.find(i => i.name === selectedCourse.instructor)}
                        setPage={setPage} 
                        currentUser={currentUser}
                        onUpdateUser={handleUpdateUser}
                        onViewCertificate={handleViewCertificate}
                        allCourses={courses}
                        allBadges={badges}
                    /> 
                    : <CoursesPage courses={courses} instructors={instructors} setPage={setPage} onViewCourse={handleViewCourse} />;
            case 'instructorProfile':
                return selectedInstructor ? 
                    <InstructorProfilePage 
                        instructor={selectedInstructor} 
                        courses={courses.filter(c => c.instructor === selectedInstructor.name)} 
                        setPage={setPage} 
                        onViewCourse={handleViewCourse}
                    /> 
                    : <InstructorsPage instructors={instructors} testimonials={testimonials} onViewInstructor={handleViewInstructor} />;
            case 'userProfile':
                return <UserProfilePage user={currentUser} onUpdateUser={handleUpdateUser} onViewCertificate={handleViewCertificate} allCourses={courses} allBadges={badges} />;
            case 'myCourses':
                return <MyCoursesPage user={currentUser} courses={courses} setPage={setPage} onViewCourse={handleViewCourse} />;
            case 'certificates':
                return <CertificatesPage user={currentUser} setPage={setPage} allCourses={courses} allBadges={badges} />;
            case 'my-certificates':
                 return <MyCertificatesPage user={currentUser} setPage={setPage} onViewCertificate={handleViewCertificate} allCourses={courses} />;
            case 'certificate':
                return selectedCertificateCourse && currentUser ? 
                    <CertificatePage course={selectedCertificateCourse} user={currentUser} setPage={setPage} />
                    : <UserProfilePage user={currentUser} onUpdateUser={handleUpdateUser} onViewCertificate={handleViewCertificate} allCourses={courses} allBadges={badges} />;
            case 'settings':
                return <SettingsPage />;
            default:
                return <HomePage courses={courses} instructors={instructors} testimonials={testimonials} setPage={setPage} onViewInstructor={handleViewInstructor} onViewCourse={handleViewCourse} currentUser={currentUser} pricingInfo={pricingInfo} onIncrementCopyCount={handleIncrementCopyCount} />;
        }
    }

    const isAdminPage = ['adminDashboard', 'manageCourses', 'manageInstructors', 'manageUsers', 'sendNotification', 'managePricing', 'manageContact'].includes(page);
    const showFooter = !(isAdminPage || page === 'login' || page === 'register' || page === 'forgotPassword' || page === 'courseDetail' || page === 'certificate');


    return (
        <div className="font-cairo text-slate-700 bg-white dark:bg-slate-900 dark:text-slate-300 antialiased">
            {showWelcomePopup && currentUser && (
                <WelcomePopup 
                    userName={currentUser.name} 
                    onClose={handleCloseWelcomePopup} 
                />
            )}
            {showRegistrationSuccessPopup && currentUser && (
                <RegistrationSuccessPopup
                    userName={currentUser.name}
                    onClose={handleCloseRegistrationSuccessPopup}
                />
            )}
            {!isAdminPage && <Header page={page} setPage={setPage} currentUser={currentUser} onLogout={handleLogout} notifications={notifications} theme={theme} toggleTheme={toggleTheme} searchQuery={searchQuery} setSearchQuery={setSearchQuery} searchResults={searchResults} onViewCourse={handleViewCourse} />}
            <main>
                {renderPage()}
            </main>
            {showFooter && <Footer setPage={setPage} />}
            {showFooter && <WhatsAppButton />}
        </div>
    );
};

export default App;