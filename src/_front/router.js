import { createRouter, createWebHistory } from 'vue-router';

import wwPage from './views/wwPage.vue';

import { initializeData, initializePlugins, onPageUnload } from '@/_common/helpers/data';

let router;
const routes = [];

function scrollBehavior(to) {
    if (to.hash) {
        return {
            el: to.hash,
            behavior: 'smooth',
        };
    } else {
        return { top: 0 };
    }
}

 
/* wwFront:start */
import pluginsSettings from '../../plugins-settings.json';

// eslint-disable-next-line no-undef
window.wwg_designInfo = {"id":"ff5e114d-9a6f-429c-b5cc-6d7a25e5caeb","homePageId":"55acd777-bf72-4986-90d1-1cd9d34813e6","authPluginId":"1fa0dd68-5069-436c-9a7d-3b54c340f1fa","baseTag":null,"defaultTheme":"light","langs":[{"lang":"en","default":true}],"background":{},"workflows":[{"id":"80117e91-64ca-4031-bb50-24f8cb017dc9","name":"Check Auth State and Route","actions":{"__ID_1__":{"id":"__ID_1__","name":"Check if logged in","next":null,"type":"if","value":{"code":"variables['91e83eab-df46-44df-8cb3-1cd46fc699b4'].isLoggedIn","__wwtype":"f"},"branches":[{"id":"__ID_2__","value":true},{"id":"__ID_3__","value":false}],"description":"Check authentication state"},"__ID_2__":{"id":"__ID_2__","name":"User authenticated","next":null,"type":"log","level":"info","message":"User is authenticated"},"__ID_3__":{"id":"__ID_3__","name":"Check if on auth pages","next":null,"type":"if","value":{"code":"const path = globalContext.page.paths.en;\nreturn path === 'login' || path === 'signup';","__wwtype":"js"},"branches":[{"id":"__ID_4__","value":true},{"id":"__ID_5__","value":false}],"description":"Check if currently on login or signup page"},"__ID_4__":{"id":"__ID_4__","name":"Already on auth page","next":null,"type":"log","level":"info","message":"User is on login/signup page"},"__ID_5__":{"id":"__ID_5__","mode":"path","name":"Redirect to login","next":null,"path":"login","type":"change-page","description":"Redirect unauthenticated user to login page","navigateMode":"internal"},"__ID_ERROR_1__":{"id":"__ID_ERROR_1__","name":"Log error","next":null,"type":"log","level":"error","message":"Error checking authentication state"}},"trigger":"onload-app","description":"<p>On app load, check if user is logged in and route to appropriate page:</p><ul><li>If not logged in, redirect to login page unless already on login/signup</li><li>If logged in, allow access to protected pages</li></ul>","firstAction":"__ID_1__","firstErrorAction":"__ID_ERROR_1__"},{"id":"c2bc535f-9fa8-414b-8587-efadbfcd90b3","name":"Initialize Auth State","actions":{"__ID_1__":{"id":"__ID_1__","code":"const storedAuth = localStorage.getItem('authState');\nreturn storedAuth ? JSON.parse(storedAuth) : {email: '', isLoggedIn: false, error: null};","name":"Get stored auth data","next":"__ID_2__","type":"custom-js","description":"Retrieve authentication data from local storage"},"__ID_2__":{"id":"__ID_2__","name":"Update Auth State","next":null,"type":"variable","varId":"91e83eab-df46-44df-8cb3-1cd46fc699b4","varValue":{"code":"context.workflow['__ID_1__'].result","__wwtype":"f"},"description":"Update the Auth State variable with stored data"},"__ID_ERROR_1__":{"id":"__ID_ERROR_1__","name":"Log initialization error","next":"__ID_ERROR_2__","type":"log","level":"error","message":"Failed to initialize auth state"},"__ID_ERROR_2__":{"id":"__ID_ERROR_2__","name":"Set default auth state","next":null,"type":"variable","varId":"91e83eab-df46-44df-8cb3-1cd46fc699b4","varValue":{"code":"{\"email\": \"\", \"isLoggedIn\": false, \"error\": \"Failed to initialize authentication state\"}","__wwtype":"f"},"description":"Set default authentication state on error"}},"trigger":"before-collection-fetch-app","description":"<p>Initialize the authentication state from local storage before any data fetching occurs. This ensures the auth state is available throughout the application.</p>","firstAction":"__ID_1__","firstErrorAction":"__ID_ERROR_1__"}],"pages":[{"id":"7452dced-96c5-42f1-b4dd-4b5e6194d476","linkId":"7452dced-96c5-42f1-b4dd-4b5e6194d476","name":"About","folder":"Company/","paths":{"en":"about","default":"about"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"11dcc7d0-c1e4-4980-bc74-9788a2e8468c","sectionTitle":"Hero Section","linkId":"50327841-d3ac-4aea-91f7-051bdc63fe67"},{"uid":"387bce23-3909-44a6-854d-75b635072b1c","sectionTitle":"Mission Section","linkId":"0215fa5e-73ed-4b9e-b57c-24fac2987443"},{"uid":"720d8f5b-440b-4d11-b143-d788b4006e46","sectionTitle":"Features Section","linkId":"9a457a84-3c80-4791-8469-ca16e0bf9456"},{"uid":"f2478a97-e7e8-4d3f-9d97-9ad18e553366","sectionTitle":"Team Section","linkId":"2784daf9-d6ea-444c-9ce4-62d0940f5b4c"},{"uid":"4ccccf54-52ca-46cd-8556-a194858f7554","sectionTitle":"Achievements Section","linkId":"c0806cc5-e31c-413c-9d4e-8823e5e9ab3f"},{"uid":"173c85e1-0424-4885-9c01-1dfcad3a168c","sectionTitle":"Achievements Section","linkId":"b13892cd-5a2e-4869-8be5-20a8b1a4d399"}],"pageUserGroups":[],"title":{"en":"About Our Project and Application"},"meta":{"desc":{"en":"Learn about our project, mission, and the innovative application that drives our business forward"},"keywords":{"en":"project overview, application details, company mission, team information"},"socialDesc":{"en":"Get insights into our project's vision, the problem we're solving, and how our application makes a difference"},"socialTitle":{"en":"Discover Our Project and Innovative Solution"}},"metaImage":""},{"id":"7a1e06a4-bc93-4ab3-b14f-6fe6cf1d0786","linkId":"7a1e06a4-bc93-4ab3-b14f-6fe6cf1d0786","name":"ProjectDetails","folder":"Dashboard/","paths":{"en":"project-details","default":"project-details"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"45ea60c5-a12d-4278-a851-85b36653364b","sectionTitle":"Navigation Section","linkId":"b6f34598-0907-43c8-905a-e41c36e2183d"},{"uid":"d2784cf8-d3c4-4998-a7d5-5cd8fd0aa720","sectionTitle":"Main Content Section","linkId":"792ceb52-e122-406d-ba13-11109241660d"}],"pageUserGroups":[],"title":{"en":"Project Details & Management"},"meta":{"desc":{"en":"Comprehensive project details page with team information, project overview, and role-based interactions"},"keywords":{"en":"project details, team management, project overview, work application, project editing"},"socialDesc":{"en":"Detailed view of project information, team composition, and role-specific interactions"},"socialTitle":{"en":"Explore Project Details and Team"}},"metaImage":""},{"id":"55acd777-bf72-4986-90d1-1cd9d34813e6","linkId":"55acd777-bf72-4986-90d1-1cd9d34813e6","name":"Home","folder":null,"paths":{"en":"home","default":"home"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"b970412b-00f0-425f-af8e-9742cffdc349","sectionTitle":"Navigation Bar","linkId":"57ef37b2-6252-4905-8055-fb7ee9cbfb7d"},{"uid":"3b511a07-8011-4440-a8a6-6423b50a764e","sectionTitle":"Dashboard Container","linkId":"8568c89d-f485-43e3-854e-b878a149a1f8"}],"pageUserGroups":[],"title":{"en":"","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"5fb0b6af-6718-4a3e-a7ef-ee633a0575ce","linkId":"5fb0b6af-6718-4a3e-a7ef-ee633a0575ce","name":"Signup","folder":"Authentication/","paths":{"en":"signup","default":"signup"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"00c47e38-13e1-4413-8590-6a35962849de","sectionTitle":"Signup Page Container","linkId":"385aa77b-cf47-49c7-b211-b4c95747ad1a"}],"pageUserGroups":[],"title":{"en":"Sign Up - Create Your Account"},"meta":{"desc":{"en":"Create a new account and join our platform"},"keywords":{"en":"signup, register, create account"},"socialDesc":{"en":"Join our platform by creating a new account"},"socialTitle":{"en":"Sign Up - Create Your Account"}},"metaImage":""},{"id":"49243db5-ca21-4e34-b6ff-1b01fcbd3dd2","linkId":"49243db5-ca21-4e34-b6ff-1b01fcbd3dd2","name":"Login","folder":"Authentication/","paths":{"en":"login","default":"login"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"8dad8664-e8ea-42df-a57b-3729cdbb3305","sectionTitle":"Login Page Container","linkId":"8ab8926f-03f3-456f-89f2-ad6c08a7d64f"}],"pageUserGroups":[],"title":{"en":"Login - Access Your Account"},"meta":{"desc":{"en":"Log in to access your account"},"keywords":{"en":"login, sign in, access account"},"socialDesc":{"en":"Sign in to your account and continue"},"socialTitle":{"en":"Login - Access Your Account"}},"metaImage":""},{"id":"a368c8a1-0b24-4786-a1e0-38c5110f332e","linkId":"a368c8a1-0b24-4786-a1e0-38c5110f332e","name":"UserManagement","folder":"Admin/","paths":{"en":"user-management","default":"user-management"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"90a3e5fc-4d29-4593-be88-ec7f56a4ebe3","sectionTitle":"Navigation Bar","linkId":"2c6f2f74-a5eb-4b42-8c1e-4a95122b0ba2"},{"uid":"daef6012-d2f8-4111-88fa-d65b2f82ace9","sectionTitle":"Main Content","linkId":"70e26290-11ac-4991-8c2b-bb3f83ad8296"}],"pageUserGroups":[],"title":{"en":"User Management Dashboard"},"meta":{"desc":{"en":"Comprehensive user management dashboard for administrators and managers"},"keywords":{"en":"user management, employee tracking, project assignment"},"socialDesc":{"en":"Manage employees, assign projects, and track workforce details"},"socialTitle":{"en":"User Management Dashboard"}},"metaImage":""},{"id":"7b5b436d-a118-4049-9a46-e116fc799c3e","linkId":"7b5b436d-a118-4049-9a46-e116fc799c3e","name":"Predictions","folder":"Analytics/","paths":{"en":"predictions","default":"predictions"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"088308df-a42b-42c3-bd37-be2a7c0a87bc","sectionTitle":"Header Section","linkId":"5ea94568-dd1e-449b-8e75-118f06fcc5f6"},{"uid":"57c770f0-de31-4958-85dc-53eb2ec693b3","sectionTitle":"Main Content","linkId":"ead544e8-3883-4d10-b87d-e520b5e11364"}],"pageUserGroups":[],"title":{"en":"Company Predictions & Analytics Dashboard"},"meta":{"desc":{"en":"Comprehensive predictive analytics dashboard with advanced forecasting models for revenue, projects, and workforce"},"keywords":{"en":"predictions, analytics, revenue forecast, ARIMA, LSTM, Holt-Winters, machine learning"},"socialDesc":{"en":"Advanced predictive analytics for strategic business insights"},"socialTitle":{"en":"Company Predictions Dashboard"}},"metaImage":""},{"id":"c60791b3-f6bd-4824-8401-61adfa6b4876","linkId":"c60791b3-f6bd-4824-8401-61adfa6b4876","name":"UserDetails","folder":"Admin/","paths":{"en":"user-details","default":"user-details"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"f4494f8d-63b0-4eb5-948e-f2dfd78f5e90","sectionTitle":"Navigation Bar","linkId":"262ab0ed-fe45-41f9-8b1c-3622d6656b27"},{"uid":"68c76e3c-09ca-40d0-a692-b53a87e459e1","sectionTitle":"Main Content","linkId":"03c9d30f-3bbe-4a2e-997c-faddd4a0d1cc"}],"pageUserGroups":[],"title":{"en":"User Details & Project Assignment"},"meta":{"desc":{"en":"Detailed user profile and project assignment management page for administrators"},"keywords":{"en":"user profile, project assignment, employee management, work hours"},"socialDesc":{"en":"Manage user details and assign projects with specific work hours and timelines"},"socialTitle":{"en":"User Details & Project Management"}},"metaImage":""},{"id":"96c369aa-d2ba-4ffa-8868-4fb5a0ebce0e","linkId":"96c369aa-d2ba-4ffa-8868-4fb5a0ebce0e","name":"Reports","folder":"Analytics/","paths":{"en":"reports","default":"reports"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"f0d5f890-d14f-4a7d-9fcf-73c24873bca0","sectionTitle":"Header Section","linkId":"f66c6bc4-e0bb-4de2-99af-810da9d3bdce"},{"uid":"94a2cadd-c641-4d5f-96db-90dadf502fcc","sectionTitle":"Main Content","linkId":"8566bbb0-1ce7-4dcc-87b3-63845e2eaabf"}],"pageUserGroups":[],"title":{"en":"Company Analytics & Performance Reports"},"meta":{"desc":{"en":"Comprehensive reports on seasonal variations, employee trends, project predictions, and model performance analysis"},"keywords":{"en":"reports, analytics, employee trends, project predictions, seasonal variations, model performance"},"socialDesc":{"en":"Detailed insights into employee trends, project predictions, and analytical model accuracy"},"socialTitle":{"en":"Company Performance Reports"}},"metaImage":""},{"id":"278e5087-708b-449a-aaca-116afbd0b975","linkId":"278e5087-708b-449a-aaca-116afbd0b975","name":"About","folder":"Company/","paths":{"en":"about","default":"about"},"langs":["en"],"cmsDataSetPath":null,"sections":[],"pageUserGroups":[],"title":{"en":"About Our Project and Application"},"meta":{"desc":{"en":"Learn about our project, mission, and the innovative application that drives our business forward"},"keywords":{"en":"project overview, application details, company mission, team information"},"socialDesc":{"en":"Get insights into our project's vision, the problem we're solving, and how our application makes a difference"},"socialTitle":{"en":"Discover Our Project and Innovative Solution"}},"metaImage":""},{"id":"281cc9d2-f9f8-4cb6-a0de-98a92aa3e98f","linkId":"281cc9d2-f9f8-4cb6-a0de-98a92aa3e98f","name":"About","folder":"Company/","paths":{"en":"about","default":"about"},"langs":["en"],"cmsDataSetPath":null,"sections":[],"pageUserGroups":[],"title":{"en":"About Our Project and Application"},"meta":{"desc":{"en":"Learn about our project, mission, and the innovative application that drives our business forward"},"keywords":{"en":"project overview, application details, company mission, team information"},"socialDesc":{"en":"Get insights into our project's vision, the problem we're solving, and how our application makes a difference"},"socialTitle":{"en":"Discover Our Project and Innovative Solution"}},"metaImage":""},{"id":"c4ba8e99-390e-4745-8cac-8425af737420","linkId":"c4ba8e99-390e-4745-8cac-8425af737420","name":"Projects","folder":"Dashboard/","paths":{"en":"projects","default":"projects"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"eb02264a-d02e-4aa2-88c9-170447e417d6","sectionTitle":"Navigation Bar","linkId":"46a2d762-d0b0-4f32-8ff7-a9f247ee0e2a"},{"uid":"51f64c8e-6605-47dd-855b-71c087c8e966","sectionTitle":"Main Content","linkId":"727b05cc-7588-4b45-8cb7-1fe50e5614c4"}],"pageUserGroups":[],"title":{"en":"Company Projects Dashboard"},"meta":{"desc":{"en":"Overview of current company projects with detailed information and navigation"},"keywords":{"en":"projects, dashboard, company projects, project list"},"socialDesc":{"en":"Explore current projects and navigate through company resources"},"socialTitle":{"en":"Company Projects Dashboard"}},"metaImage":""}],"plugins":[{"id":"f9ef41c3-1c53-4857-855b-f2f6a40b7186","name":"Supabase","namespace":"supabase"},{"id":"1fa0dd68-5069-436c-9a7d-3b54c340f1fa","name":"Supabase Auth","namespace":"supabaseAuth"},{"id":"2bd1c688-31c5-443e-ae25-59aa5b6431fb","name":"REST API","namespace":"restApi"}]};
// eslint-disable-next-line no-undef
window.wwg_cacheVersion = 4;
// eslint-disable-next-line no-undef
window.wwg_pluginsSettings = pluginsSettings;
// eslint-disable-next-line no-undef
window.wwg_disableManifest = false;

const defaultLang = window.wwg_designInfo.langs.find(({ default: isDefault }) => isDefault) || {};

const registerRoute = (page, lang, forcedPath) => {
    const langSlug = !lang.default || lang.isDefaultPath ? `/${lang.lang}` : '';
    let path =
        forcedPath ||
        (page.id === window.wwg_designInfo.homePageId ? '/' : `/${page.paths[lang.lang] || page.paths.default}`);

    //Replace params
    path = path.replace(/{{([\w]+)\|([^/]+)?}}/g, ':$1');

    routes.push({
        path: langSlug + path,
        component: wwPage,
        name: `page-${page.id}-${lang.lang}`,
        meta: {
            pageId: page.id,
            lang,
            isPrivate: !!page.pageUserGroups?.length,
        },
        async beforeEnter(to, from) {
            if (to.name === from.name) return;
            //Set page lang
            wwLib.wwLang.defaultLang = defaultLang.lang;
            wwLib.$store.dispatch('front/setLang', lang.lang);

            //Init plugins
            await initializePlugins();

            //Check if private page
            if (page.pageUserGroups?.length) {
                // cancel navigation if no plugin
                if (!wwLib.wwAuth.plugin) {
                    return false;
                }

                await wwLib.wwAuth.init();

                // Redirect to not sign in page if not logged
                if (!wwLib.wwAuth.getIsAuthenticated()) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthenticatedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }

                //Check roles are required
                if (
                    page.pageUserGroups.length > 1 &&
                    !wwLib.wwAuth.matchUserGroups(page.pageUserGroups.map(({ userGroup }) => userGroup))
                ) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthorizedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }
            }

            try {
                await import(`@/pages/${page.id.split('_')[0]}.js`);
                await wwLib.wwWebsiteData.fetchPage(page.id);

                //Scroll to section or on top after page change
                if (to.hash) {
                    const targetElement = document.getElementById(to.hash.replace('#', ''));
                    if (targetElement) targetElement.scrollIntoView();
                } else {
                    document.body.scrollTop = document.documentElement.scrollTop = 0;
                }

                return;
            } catch (err) {
                wwLib.$store.dispatch('front/showPageLoadProgress', false);

                if (err.redirectUrl) {
                    return { path: err.redirectUrl || '404' };
                } else {
                    //Any other error: go to target page using window.location
                    window.location = to.fullPath;
                }
            }
        },
    });
};

for (const page of window.wwg_designInfo.pages) {
    for (const lang of window.wwg_designInfo.langs) {
        if (!page.langs.includes(lang.lang)) continue;
        registerRoute(page, lang);
    }
}

const page404 = window.wwg_designInfo.pages.find(page => page.paths.default === '404');
if (page404) {
    for (const lang of window.wwg_designInfo.langs) {
        // Create routes /:lang/:pathMatch(.*)* etc for all langs of the 404 page
        if (!page404.langs.includes(lang.lang)) continue;
        registerRoute(
            page404,
            {
                default: false,
                lang: lang.lang,
            },
            '/:pathMatch(.*)*'
        );
    }
    // Create route /:pathMatch(.*)* using default project lang
    registerRoute(page404, { default: true, isDefaultPath: false, lang: defaultLang.lang }, '/:pathMatch(.*)*');
} else {
    routes.push({
        path: '/:pathMatch(.*)*',
        async beforeEnter() {
            window.location.href = '/404';
        },
    });
}

let routerOptions = {};

const isProd =
    !window.location.host.includes(
        '-staging.' + (process.env.WW_ENV === 'staging' ? process.env.VUE_APP_PREVIEW_URL : '')
    ) && !window.location.host.includes(process.env.VUE_APP_PREVIEW_URL);

if (isProd && window.wwg_designInfo.baseTag?.href) {
    let baseTag = window.wwg_designInfo.baseTag.href;
    if (!baseTag.startsWith('/')) {
        baseTag = '/' + baseTag;
    }
    if (!baseTag.endsWith('/')) {
        baseTag += '/';
    }

    routerOptions = {
        base: baseTag,
        history: createWebHistory(baseTag),
        routes,
    };
} else {
    routerOptions = {
        history: createWebHistory(),
        routes,
    };
}

router = createRouter({
    ...routerOptions,
    scrollBehavior,
});

//Trigger on page unload
let isFirstNavigation = true;
router.beforeEach(async (to, from) => {
    if (to.name === from.name) return;
    if (!isFirstNavigation) await onPageUnload();
    isFirstNavigation = false;
    wwLib.globalVariables._navigationId++;
    return;
});

//Init page
router.afterEach((to, from, failure) => {
    wwLib.$store.dispatch('front/showPageLoadProgress', false);
    let fromPath = from.path;
    let toPath = to.path;
    if (!fromPath.endsWith('/')) fromPath = fromPath + '/';
    if (!toPath.endsWith('/')) toPath = toPath + '/';
    if (failure || (from.name && toPath === fromPath)) return;
    initializeData(to);
});
/* wwFront:end */

export default router;
