import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
  EN: {
    home: 'Home',
    products: 'Products & Systems',
    applications: 'Applications',
    designer: 'DESIGNER Suite',
    shop: 'Shop & Pricing',
    support: 'Service & Support',
    about: 'Company',
    admin: 'Admin 🛡️',
    signIn: 'Sign In',
    signUp: 'Sign Up',
    signOut: 'Sign Out',
    freeDesignerBanner: 'DESIGNER Suite is 100% Free for Basic Use!',
    heroTitle: 'Maskless Lithography & Direct Write Systems',
    heroSubtitle: 'Sub-micron resolution laser lithography, micro-optics patterning, and thermal scanning probe nanofabrication.',
    exploreProducts: 'Explore Lithography Systems',
    requestConsultation: 'Request System Demo & Quote',
    premiumServices: 'Premium Service Plans',
    selectPlan: 'Select Service Plan',
    legalNotice: 'Legal Notice',
    privacyStatement: 'Privacy Statement',
    termsConditions: 'Terms & Conditions',
    footerCopyright: '© 2026 MLLMLANanofab GmbH. Precision Laser Lithography.'
  },
  DE: {
    home: 'Startseite',
    products: 'Produkte & Systeme',
    applications: 'Anwendungen',
    designer: 'DESIGNER Suite',
    shop: 'Preise & Lizenzen',
    support: 'Service & Support',
    about: 'Unternehmen',
    admin: 'Admin 🛡️',
    signIn: 'Anmelden',
    signUp: 'Registrieren',
    signOut: 'Abmelden',
    freeDesignerBanner: 'DESIGNER Suite ist zu 100% kostenlos für Basisnutzung!',
    heroTitle: 'Maskenlose Lithographie & Direkt-Schreib-Systeme',
    heroSubtitle: 'Sub-Mikrometer Auflösung Laserlithographie, Mikro-Optik Strukturierung und thermische Rastersonden-Nanofabrikation.',
    exploreProducts: 'Lithographiesysteme Entdecken',
    requestConsultation: 'System-Demo & Angebot Anfordern',
    premiumServices: 'Premium-Service-Pläne',
    selectPlan: 'Service-Plan Auswählen',
    legalNotice: 'Impressum',
    privacyStatement: 'Datenschutz',
    termsConditions: 'AGB',
    footerCopyright: '© 2026 MLLMLANanofab GmbH. Präzisions-Laserlithographie.'
  },
  ZH: {
    home: '首页',
    products: '产品与系统',
    applications: '应用领域',
    designer: 'DESIGNER 设计套件',
    shop: '价格与服务',
    support: '服务与支持',
    about: '关于我们',
    admin: '管理后台 🛡️',
    signIn: '登录',
    signUp: '注册账户',
    signOut: '退出登录',
    freeDesignerBanner: 'DESIGNER 基础套件完全免费！',
    heroTitle: '无掩膜激光光刻与直写系统',
    heroSubtitle: '亚微米级分辨率激光光刻、微光学图形化与热扫描探针纳米制造。',
    exploreProducts: '探索光刻系统',
    requestConsultation: '申请系统演示与报价',
    premiumServices: '高级服务计划',
    selectPlan: '选择服务套餐',
    legalNotice: '法律声明',
    privacyStatement: '隐私条款',
    termsConditions: '服务条款',
    footerCopyright: '© 2026 MLLMLANanofab GmbH. 高精度激光光刻技术。'
  },
  JA: {
    home: 'ホーム',
    products: '製品＆システム',
    applications: '応用分野',
    designer: 'DESIGNER スイート',
    shop: '価格＆ライセンス',
    support: 'サポート',
    about: '会社概要',
    admin: '管理者 🛡️',
    signIn: 'サインイン',
    signUp: '新規登録',
    signOut: 'サインアウト',
    freeDesignerBanner: 'DESIGNERスイート基本機能は100%無料！',
    heroTitle: 'マスクレス露光＆直接描画装置',
    heroSubtitle: 'サブミクロン解像度レーザーリソグラフィ、マイクロオプティクス形成、熱走査プローブナノ加工。',
    exploreProducts: '露光装置を見る',
    requestConsultation: 'デモ＆見積もり依頼',
    premiumServices: 'プレミアムサービスプラン',
    selectPlan: 'プランを選択',
    legalNotice: '法的告知',
    privacyStatement: 'プライバシーポリシー',
    termsConditions: '利用規約',
    footerCopyright: '© 2026 MLLMLANanofab GmbH. 精密レーザーリソグラフィ。'
  },
  ES: {
    home: 'Inicio',
    products: 'Productos y Sistemas',
    applications: 'Aplicaciones',
    designer: 'Suite DESIGNER',
    shop: 'Precios y Planes',
    support: 'Servicio y Soporte',
    about: 'Empresa',
    admin: 'Admin 🛡️',
    signIn: 'Iniciar Sesión',
    signUp: 'Registrarse',
    signOut: 'Cerrar Sesión',
    freeDesignerBanner: '¡DESIGNER Suite es 100% Gratis para uso básico!',
    heroTitle: 'Sistemas de Litografía sin Máscara y Escritura Directa',
    heroSubtitle: 'Litografía láser de resolución submicrónica, microóptica y nanofabricación por sonda térmica.',
    exploreProducts: 'Explorar Sistemas de Litografía',
    requestConsultation: 'Solicitar Demostración y Cotización',
    premiumServices: 'Planes de Servicio Premium',
    selectPlan: 'Seleccionar Plan',
    legalNotice: 'Aviso Legal',
    privacyStatement: 'Política de Privacidad',
    termsConditions: 'Términos y Condiciones',
    footerCopyright: '© 2026 MLLMLANanofab GmbH. Litografía Láser de Precisión.'
  },
  FR: {
    home: 'Accueil',
    products: 'Produits & Systèmes',
    applications: 'Applications',
    designer: 'Suite DESIGNER',
    shop: 'Tarifs & Services',
    support: 'Service & Support',
    about: 'Société',
    admin: 'Admin 🛡️',
    signIn: 'Connexion',
    signUp: "S'inscrire",
    signOut: 'Déconnexion',
    freeDesignerBanner: 'La suite DESIGNER est 100% gratuite pour une utilisation de base !',
    heroTitle: 'Systèmes de Lithographie Sans Masque et Écriture Directe',
    heroSubtitle: 'Lithographie laser résolution sous-micronique, micro-optique et nanofabrication à sonde thermique.',
    exploreProducts: 'Explorer les Systèmes',
    requestConsultation: 'Demander une Démo & Devis',
    premiumServices: 'Offres de Services Premium',
    selectPlan: 'Choisir une Offre',
    legalNotice: 'Mentions Légales',
    privacyStatement: 'Politique de Confidentialité',
    termsConditions: 'Conditions Générales',
    footerCopyright: '© 2026 MLLMLANanofab GmbH. Lithographie Laser de Précision.'
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('mllmla_lang') || 'EN';
  });

  const changeLanguage = (lang) => {
    if (translations[lang]) {
      setLanguage(lang);
      localStorage.setItem('mllmla_lang', lang);
    }
  };

  const t = (key, fallback = '') => {
    const dict = translations[language] || translations['EN'];
    return dict[key] || translations['EN'][key] || fallback || key;
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    return {
      language: 'EN',
      changeLanguage: () => {},
      t: (k, defaultText) => defaultText || k
    };
  }
  return context;
};
