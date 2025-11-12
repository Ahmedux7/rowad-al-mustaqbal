// In a real application, you would use a proper database.
// This is a mock database using localStorage to simulate async operations.
const DB_NAME = 'rowad_db';
const ASYNC_DELAY = 100; // ms

const initialData = {
  users: [
    {
      id: 1,
      name: 'علي أحمد',
      email: 'ali@rowad.kid',
      password: 'password123',
      role: 'بطل صغير',
      bio: 'أحب بناء الأشياء بالليغو وأريد أن أتعلم كيف أصنع ألعابي الخاصة.',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80',
      phone: '',
      jobTitle: 'مدرسة المستقبل الابتدائية',
      enrolledCourses: [1, 2, 3, 4],
      completedCourses: [1, 2, 4]
    },
    {
      id: 99,
      name: 'Admin User',
      email: 'admin@rowad.kid',
      password: 'admin123',
      role: 'admin',
      bio: 'مدير منصة رواد المستقبل.',
      avatar: 'https://images.unsplash.com/photo-1580852300654-03ab857c683b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80',
      phone: '0100000000',
      jobTitle: 'Platform Administrator',
      enrolledCourses: [],
      completedCourses: []
    }
  ],
  courses: [
    { 
        id: 1, 
        level: 'مبتدئ', 
        category: 'برمجة', 
        title: 'مغامرات بايثون: اصنع لعبتك الأولى', 
        description: 'تعلم أساسيات البرمجة بطريقة ممتعة عبر بناء لعبة مغامرات خاصة بك خطوة بخطوة.', 
        instructor: 'كابتن كود', 
        image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60', 
        tags: ['ألعاب', 'بايثون'], 
        duration: 'ساعتان', 
        hasCertificate: true, 
        price: 50,
        projectsCount: 3,
        lessons: [
            { id: 1, title: 'مرحباً أيها البطل! ما هي البرمجة؟', duration: '05:10', videoUrl: 'https://www.youtube.com/watch?v=MuN_B0GNHpI' },
            { id: 2, title: 'لنتعرف على بايثون صديقنا الجديد', duration: '07:26', videoUrl: 'https://www.youtube.com/watch?v=RecyclerView-display-a-list-of-items' },
            { id: 3, title: 'أول أمر برمجي: لنجعل الشخصية تتحرك', duration: '08:16', videoUrl: 'https://www.youtube.com/watch?v=MuN_B0GNHpI' },
            { id: 4, title: 'بناء عالم اللعبة: إضافة العقبات', duration: '09:05', videoUrl: 'https://www.youtube.com/watch?v=RecyclerView-display-a-list-of-items' },
            { id: 5, title: 'إضافة النقاط والكنوز', duration: '07:33', videoUrl: 'https://www.youtube.com/watch?v=MuN_B0GNHpI' },
            { id: 6, title: 'شاشة الفوز والخسارة', duration: '08:12', videoUrl: 'https://www.youtube.com/watch?v=RecyclerView-display-a-list-of-items' },
            { id: 7, title: 'شارك لعبتك مع أصدقائك!', duration: '06:01', videoUrl: 'https://www.youtube.com/watch?v=MuN_B0GNHpI' }
        ]
    },
    { 
        id: 2, 
        level: 'مبتدئ', 
        category: 'ريادة أعمال', 
        title: 'متجري الصغير: من الفكرة للمكسب', 
        description: 'هل لديك فكرة رائعة؟ تعلم كيف تحولها لمتجر صغير ناجح وتبيع أول منتج لك.', 
        instructor: 'نورة الريادية', 
        image: 'https://images.unsplash.com/photo-1579758629938-03607ccdbaba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60', 
        tags: ['مشاريع', 'أعمال'], 
        duration: 'ساعة و 30 دقيقة', 
        hasCertificate: true, 
        price: 45,
        projectsCount: 2,
        lessons: [
            { id: 1, title: 'ما هي فكرة المشروع؟', duration: '06:20', videoUrl: 'https://www.youtube.com/watch?v=MuN_B0GNHpI' },
            { id: 2, title: 'تصميم شعار لمتجرك', duration: '08:00', videoUrl: 'https://www.youtube.com/watch?v=RecyclerView-display-a-list-of-items' },
            { id: 3, title: 'تسعير منتجك الأول', duration: '05:55', videoUrl: 'https://www.youtube.com/watch?v=MuN_B0GNHpI' },
            { id: 4, title: 'طرق بسيطة للتسويق', duration: '09:15', videoUrl: 'https://www.youtube.com/watch?v=RecyclerView-display-a-list-of-items' },
            { id: 5, title: 'أول عملية بيع!', duration: '07:45', videoUrl: 'https://www.youtube.com/watch?v=MuN_B0GNHpI' }
        ]
    },
    { 
        id: 3, 
        level: 'متوسط', 
        category: 'القيادة', 
        title: 'قائد الفريق: كيف تلهم أصدقائك', 
        description: 'اكتشف القائد الذي بداخلك! تعلم مهارات التواصل وحل المشكلات لقيادة فريقك نحو الفوز.', 
        instructor: 'أستاذ حكيم', 
        image: 'https://images.unsplash.com/photo-1529220396154-3d8885b5a415?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60', 
        tags: ['مهارات', 'فريق'], 
        duration: 'ساعة واحدة', 
        hasCertificate: true, 
        price: 75,
        projectsCount: 1,
        lessons: [
            { id: 1, title: 'ما هو القائد؟', duration: '04:50', videoUrl: 'https://www.youtube.com/watch?v=MuN_B0GNHpI' },
            { id: 2, title: 'فن الاستماع للآخرين', duration: '07:10', videoUrl: 'https://www.youtube.com/watch?v=RecyclerView-display-a-list-of-items' },
            { id: 3, title: 'كيف تحفز فريقك', duration: '06:30', videoUrl: 'https://www.youtube.com/watch?v=MuN_B0GNHpI' },
            { id: 4, title: 'حل الخلافات بحكمة', duration: '08:05', videoUrl: 'https://www.youtube.com/watch?v=RecyclerView-display-a-list-of-items' },
            { id: 5, title: 'الاحتفال بنجاح الفريق', duration: '05:00', videoUrl: 'https://www.youtube.com/watch?v=MuN_B0GNHpI' }
        ] 
    },
    { 
        id: 4, 
        level: 'متوسط', 
        category: 'برمجة', 
        title: 'بناة المواقع: تصميم أول صفحة ويب', 
        description: 'تعلم لغات تصميم المواقع HTML و CSS وصمم صفحة ويب عن هوايتك المفضلة.', 
        instructor: 'كابتن كود', 
        image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60', 
        tags: ['تصميم', 'ويب'], 
        duration: '3 ساعات', 
        hasCertificate: true, 
        price: 120,
        projectsCount: 4,
        lessons: [
            { id: 1, title: 'مقدمة إلى عالم الويب', duration: '06:45', videoUrl: 'https://www.youtube.com/watch?v=MuN_B0GNHpI' },
            { id: 2, title: 'أساسيات لغة HTML', duration: '10:15', videoUrl: 'https://www.youtube.com/watch?v=RecyclerView-display-a-list-of-items' },
            { id: 3, title: 'إضافة النصوص والصور', duration: '09:30', videoUrl: 'https://www.youtube.com/watch?v=MuN_B0GNHpI' },
            { id: 4, title: 'تلوين وتنسيق صفحتك مع CSS', duration: '12:00', videoUrl: 'https://www.youtube.com/watch?v=RecyclerView-display-a-list-of-items' },
            { id: 5, title: 'مشروعك الأول: صفحة "عن نفسي"', duration: '15:00', videoUrl: 'https://www.youtube.com/watch?v=MuN_B0GNHpI' }
        ]
    },
    { 
        id: 5, 
        level: 'متقدم', 
        category: 'ريادة أعمال', 
        title: 'المخترع الصغير: حوّل شغفك لمنتج', 
        description: 'تعلم كيف تخطط، تصمم، وتنشئ نموذجًا أوليًا لاختراعك المبتكر.', 
        instructor: 'نورة الريادية', 
        image: 'https://images.unsplash.com/photo-1518349619113-03114f06ac3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60', 
        tags: ['ابتكار', 'تصنيع'], 
        duration: '4 ساعات', 
        hasCertificate: true, 
        price: 250,
        projectsCount: 2,
        lessons: [
            { id: 1, title: 'من أين تأتي الأفكار؟', duration: '08:22', videoUrl: 'https://www.youtube.com/watch?v=MuN_B0GNHpI' },
            { id: 2, title: 'رسم فكرتك على الورق', duration: '10:50', videoUrl: 'https://www.youtube.com/watch?v=RecyclerView-display-a-list-of-items' },
            { id: 3, title: 'بناء النموذج الأولي', duration: '14:30', videoUrl: 'https://www.youtube.com/watch?v=MuN_B0GNHpI' },
            { id: 4, title: 'تجربة الاختراع وتحسينه', duration: '12:10', videoUrl: 'https://www.youtube.com/watch?v=RecyclerView-display-a-list-of-items' },
            { id: 5, title: 'عرض اختراعك للعالم', duration: '09:00', videoUrl: 'https://www.youtube.com/watch?v=MuN_B0GNHpI' }
        ] 
    }
  ],
  instructors: [
    { id: 101, name: 'كابتن كود', title: 'خبير برمجة ومطور ألعاب', students: 180, courses: 2, image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', bio: 'أحب تحويل الأفكار الخيالية إلى ألعاب وتطبيقات ممتعة. مهمتي هي أن أجعل البرمجة سهلة ومغامرة شيقة لكل الأطفال.' },
    { id: 102, name: 'نورة الريادية', title: 'مرشدة أعمال ومبتكرة مشاريع', students: 150, courses: 2, image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', bio: 'أساعد الأطفال على اكتشاف أفكارهم التجارية وتحويلها إلى مشاريع صغيرة وناجحة. أؤمن بأن كل طفل يمكن أن يكون رائد أعمال.' },
    { id: 103, name: 'أستاذ حكيم', title: 'مدرب مهارات قيادية وتفكير إبداعي', students: 110, courses: 1, image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', bio: 'أعمل مع الأطفال لتنمية مهاراتهم القيادية وقدرتهم على حل المشكلات. هدفي هو بناء جيل من القادة الواثقين والمبدعين.' }
  ],
  testimonials: [
    { name: 'والدة الطفل أحمد', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80', rating: 5, text: "ابني أحب دورة 'مغامرات بايثون' كثيراً! المرشد كان رائعاً والمحتوى كان ممتعاً ومفيداً. الآن هو متحمس لتعلم المزيد عن البرمجة." },
    { name: 'والد الطفلة سارة', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80', rating: 5, text: "منصة رائعة بحق! ابنتي تعلمت الكثير في دورة 'متجري الصغير' وبدأت بالفعل في بيع رسوماتها. شكراً لكم على هذا المحتوى القيم." },
    { name: 'والدة الطفل عمر', image: 'https://images.unsplash.com/photo-1556157382-97eda2b62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80', rating: 4, text: "تجربة تعليمية ممتازة ومختلفة. المحتوى آمن ومناسب للأطفال، والدعم الفني سريع الاستجابة. أوصي بها لكل الآباء." }
  ],
  notifications: [
    { icon: 'StarIcon', className: 'text-accent-400', title: 'مغامرة جديدة بانتظارك!', time: 'منذ 5 دقائق', text: 'مغامرة "بناة المواقع" متاحة الآن.' },
    { icon: 'CertificateIcon', className: 'text-green-500', title: 'تهانينا!', time: 'منذ 1 ساعة', text: 'لقد أكملت أول مشروع في مغامرة بايثون.' },
    { icon: 'UserGroupIcon', title: 'تذكير بالجلسة المباشرة', time: 'أمس', text: 'جلستك مع كابتن كود تبدأ غداً.' },
    { icon: 'WarningIcon', className: 'text-yellow-500', title: 'تحديث مهم للخصوصية', time: 'منذ يومين', text: 'لقد قمنا بتحديث سياسة الخصوصية الخاصة بنا.' },
    { icon: 'InformationCircleIcon', className: 'text-blue-500', title: 'صيانة مجدولة', time: 'منذ 3 أيام', text: 'ستكون هناك فترة صيانة قصيرة يوم الجمعة.' }
  ],
  badges: [
    { id: 'badge-1', title: 'مستكشف جديد', description: 'أكملت أول مغامرة لك بنجاح!', icon: 'RocketLaunchIcon', criteria: { type: 'courseCount', value: 1 } },
    { id: 'badge-2', title: 'بطل المغامرات', description: 'أكملت 3 مغامرات بنجاح!', icon: 'TrophyIcon', criteria: { type: 'courseCount', value: 3 } },
    { id: 'badge-3', title: 'خبير بايثون', description: 'أتقنت أساسيات البرمجة.', icon: 'AcademicCapIcon', criteria: { type: 'courseCategory', value: 'برمجة' } },
    { id: 'badge-4', title: 'رائد أعمال ناشئ', description: 'أطلقت أول مشروع لك!', icon: 'SuitcaseIcon', criteria: { type: 'courseCategory', value: 'ريادة أعمال' } },
    { id: 'badge-5', title: 'قائد ملهم', description: 'أظهرت مهارات قيادية رائعة!', icon: 'UserGroupIcon', criteria: { type: 'courseCategory', value: 'القيادة' } },
    { id: 'badge-6', title: 'مغامر أسطوري', description: 'لقد أكملت 5 مغامرات!', icon: 'ShieldCheckIcon', criteria: { type: 'courseCount', value: 5 } },
    { id: 'badge-7', title: 'عضو جديد', description: 'مرحباً بك في مجتمع رواد المستقبل!', icon: 'SparklesIcon', criteria: { type: 'isMember' } }
  ],
  pricingInfo: {
      instapayNumber: '+201021181416',
      paymentEmail: 'payments@fekryaiad.com',
      price: 4000,
      copyCount: 0
  },
  contactInfo: {
    email: 'support@rowad.kid',
    phone: '+20 123 456 7890',
    address: 'القاهرة, مصر'
  },
  contactRequests: []
};

// --- DB Helper Functions ---
const getDb = () => {
  const db = localStorage.getItem(DB_NAME);
  return db ? JSON.parse(db) : null;
};
const saveDb = (db: any) => {
  try {
    localStorage.setItem(DB_NAME, JSON.stringify(db));
    return { success: true };
  } catch (error) {
    console.error("Error saving to localStorage:", error);
    // This can happen if the data is too large (e.g., large videos)
    return { success: false, message: 'فشل حفظ البيانات. قد يكون حجم الملف كبيرًا جدًا.' };
  }
};


const simulateAsync = <T>(operation: () => T): Promise<T> => {
    return new Promise<T>(resolve => {
        setTimeout(() => {
            const result = operation();
            resolve(result);
        }, ASYNC_DELAY);
    });
};

// --- Public API ---
export const init = () => { if (!getDb()) { saveDb(initialData); } };
export const getData = (table: string) => simulateAsync(() => { const db = getDb(); return db ? db[table] : []; });

// --- Authentication ---
export const login = (email, password) => simulateAsync(() => {
  const db = getDb();
  const user = db.users.find(u => u.email === email && u.password === password);
  if (user) { sessionStorage.setItem('currentUserEmail', user.email); return user; }
  return null;
});

export const register = ({ name, email, password }) => simulateAsync(() => {
    const db = getDb();
    if (db.users.find(u => u.email === email)) {
        return { success: false, message: 'هذا البريد الإلكتروني مسجل بالفعل.' };
    }
    const newUser = {
        id: Date.now(), name, email, password, role: 'بطل صغير', bio: '',
        avatar: 'https://i.pravatar.cc/150?u=' + email,
        phone: '', jobTitle: '',
        enrolledCourses: [],
        completedCourses: []
    };
    db.users.push(newUser);
    saveDb(db);
    return { success: true, user: newUser };
});

export const logout = () => { sessionStorage.removeItem('currentUserEmail'); };

export const getSession = () => simulateAsync(() => {
  const email = sessionStorage.getItem('currentUserEmail');
  if (!email) return null;
  const db = getDb();
  return db.users.find(u => u.email === email) || null;
});

export const establishSession = (user) => {
    if (user && user.email) {
        sessionStorage.setItem('currentUserEmail', user.email);
    }
};

// --- User Management ---
export const updateUser = (updatedUser: any) => simulateAsync(() => {
    const db = getDb();
    if (!db) return { success: false, message: 'Database not found.' };

    if (db.users.some(u => u.email === updatedUser.email && u.id !== updatedUser.id)) {
        return { success: false, message: 'المستخدم صاحب هذا البريد الإلكتروني موجود بالفعل.' };
    }
    
    const userIndex = db.users.findIndex(u => u.id === updatedUser.id);
    if (userIndex > -1) {
        db.users[userIndex] = { ...db.users[userIndex], ...updatedUser };
        const saveResult = saveDb(db);
        if (!saveResult.success) return saveResult;

        
        getSession().then(sessionUser => {
             if ((sessionUser as any)?.id === updatedUser.id) {
                sessionStorage.setItem('currentUserEmail', updatedUser.email);
            }
        });
        return { success: true, user: db.users[userIndex] };
    }
    return { success: false, message: 'المستخدم غير موجود.' };
});

export const deleteUser = (id: number) => simulateAsync(() => {
    const db = getDb();
    const initialLength = db.users.length;
    db.users = db.users.filter(u => u.id !== id);
    saveDb(db);
    return db.users.length < initialLength;
});

export const addUser = (userData: any) => simulateAsync(() => {
    const db = getDb();
    if (db.users.find(u => u.email === userData.email)) {
        return { success: false, message: 'المستخدم صاحب هذا البريد الإلكتروني موجود بالفعل.' };
    }
    const newUser = {
        id: Date.now(),
        name: userData.name,
        email: userData.email,
        password: userData.password,
        role: userData.role,
        bio: '',
        avatar: `https://i.pravatar.cc/150?u=${userData.email}`,
        phone: '',
        jobTitle: '',
        enrolledCourses: [],
        completedCourses: [],
    };
    db.users.push(newUser);
    saveDb(db);
    return { success: true, user: newUser };
});


// --- Admin CRUD ---
export const getStats = () => simulateAsync(() => {
    const db = getDb();
    return {
        users: db.users.length,
        courses: db.courses.length,
        instructors: db.instructors.length
    };
});
// Courses
export const addCourse = (course: any) => simulateAsync(() => {
    const db = getDb();
    course.id = Date.now();
    db.courses.push(course);
    return saveDb(db);
});
export const updateCourse = (updatedCourse: any) => simulateAsync(() => {
    const db = getDb();
    const index = db.courses.findIndex(c => c.id === updatedCourse.id);
    if (index > -1) { 
        db.courses[index] = updatedCourse; 
        return saveDb(db); 
    }
    return { success: false, message: 'المغامرة غير موجودة.' };
});
export const deleteCourse = (id: number) => simulateAsync(() => {
    const db = getDb();
    db.courses = db.courses.filter(c => c.id !== id);
    saveDb(db);
});
// Instructors
export const addInstructor = (instructor: any) => simulateAsync(() => {
    const db = getDb();
    instructor.id = Date.now();
    db.instructors.push(instructor);
    saveDb(db);
});
export const updateInstructor = (updatedInstructor: any) => simulateAsync(() => {
    const db = getDb();
    const index = db.instructors.findIndex(i => i.id === updatedInstructor.id);
    if (index > -1) { db.instructors[index] = updatedInstructor; saveDb(db); }
});
export const deleteInstructor = (id: number) => simulateAsync(() => {
    const db = getDb();
    db.instructors = db.instructors.filter(i => i.id !== id);
    saveDb(db);
});
// Notifications
export const addNotification = (notification: any) => simulateAsync(() => {
    const db = getDb();
    const newNotif = {
        ...notification,
        time: 'الآن',
    };
    db.notifications.unshift(newNotif);
    saveDb(db);
});
// Pricing
export const getPricingInfo = () => simulateAsync(() => {
    const db = getDb();
    return db.pricingInfo;
});
export const updatePricingInfo = (info: any) => simulateAsync(() => {
    const db = getDb();
    db.pricingInfo = { ...db.pricingInfo, ...info };
    saveDb(db);
    return db.pricingInfo;
});
export const incrementCopyCount = () => simulateAsync(() => {
    const db = getDb();
    db.pricingInfo.copyCount += 1;
    saveDb(db);
    return db.pricingInfo.copyCount;
});
// Contact
export const getContactInfo = () => simulateAsync(() => {
    const db = getDb();
    return db.contactInfo;
});
export const updateContactInfo = (info: any) => simulateAsync(() => {
    const db = getDb();
    db.contactInfo = { ...db.contactInfo, ...info };
    saveDb(db);
    return db.contactInfo;
});
export const addContactRequest = (request: any) => simulateAsync(() => {
    const db = getDb();
    const newRequest = { id: Date.now(), ...request, date: new Date().toISOString() };
    db.contactRequests.unshift(newRequest);
    saveDb(db);
});
export const deleteContactRequest = (id: number) => simulateAsync(() => {
    const db = getDb();
    db.contactRequests = db.contactRequests.filter(r => r.id !== id);
    saveDb(db);
});
