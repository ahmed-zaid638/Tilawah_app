const libraryRoutes = {
  "/dashboard/library": "المكتبة",
  "/dashboard/library/tests": "الاختبارات",
  "/dashboard/library/islamic-stories": "قصص اسلامية",
  "/dashboard/library/prophet": "محمد ﷺ",
  "/dashboard/library/tasbih": "تسبيح",
  "/dashboard/library/fatwa": "فتاوى",
  "/dashboard/library/hadith": "الاحاديث",
  "/dashboard/library/religious-questions": "اسئلة دينية",
  "/dashboard/library/prayers": "ادعية",
  "/dashboard/library/podcast": "بودكاست",
  "/dashboard/library/quraa": "القراء",
  "/dashboard/library/lectures": "خطب و محاضرات",
};

const routeTitles: { [key: string]: string } = {
  "/dashboard": "الرئيسية",
  "/dashboard/quran": "القرآن",
  ...libraryRoutes,
  "/dashboard/settings": "الإعدادات",

  "/dashboard/whishlist": "المحفوظات",
  "/dashboard/azkar": "الازكار",
};

const useHeaderTitle = (route: string) => {
  return routeTitles[route];
};

export default useHeaderTitle;
