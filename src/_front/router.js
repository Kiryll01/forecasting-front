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
window.wwg_designInfo = {"id":"449fd265-542c-440b-aa40-4a6bc802352c","homePageId":"1c7d5846-ed54-4c03-a7ea-e5f98b1cbda9","authPluginId":null,"baseTag":null,"defaultTheme":"light","langs":[{"lang":"en","default":true}],"background":{},"workflows":[],"pages":[{"id":"1c7d5846-ed54-4c03-a7ea-e5f98b1cbda9","linkId":"1c7d5846-ed54-4c03-a7ea-e5f98b1cbda9","name":"Home","folder":null,"paths":{"en":"home","default":"home"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"94decadd-058d-4e93-a2e1-fb7a7dba08bd","sectionTitle":"Navigation Bar","linkId":"57ef37b2-6252-4905-8055-fb7ee9cbfb7d"},{"uid":"9e86d7d9-0b24-4b5f-89d8-546e7056f97b","sectionTitle":"Dashboard Container","linkId":"8568c89d-f485-43e3-854e-b878a149a1f8"}],"pageUserGroups":[],"title":{"en":"","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"23f1465e-e566-41a4-9941-d6006b536180","linkId":"23f1465e-e566-41a4-9941-d6006b536180","name":"Signup","folder":"Authentication/","paths":{"en":"signup","default":"signup"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"b8897fc4-e84a-4ec9-b35f-517ffba9ae21","sectionTitle":"Signup Page Container","linkId":"385aa77b-cf47-49c7-b211-b4c95747ad1a"}],"pageUserGroups":[],"title":{"en":"Sign Up - Create Your Account"},"meta":{"desc":{"en":"Create a new account and join our platform"},"keywords":{"en":"signup, register, create account"},"socialDesc":{"en":"Join our platform by creating a new account"},"socialTitle":{"en":"Sign Up - Create Your Account"}},"metaImage":""},{"id":"4a2a40ef-5918-43f0-a98b-6e7cbd6a0066","linkId":"4a2a40ef-5918-43f0-a98b-6e7cbd6a0066","name":"Login","folder":"Authentication/","paths":{"en":"login","default":"login"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"ada085ad-541c-434f-a291-35c19d5d2780","sectionTitle":"Login Page Container","linkId":"8ab8926f-03f3-456f-89f2-ad6c08a7d64f"}],"pageUserGroups":[],"title":{"en":"Login - Access Your Account"},"meta":{"desc":{"en":"Log in to access your account"},"keywords":{"en":"login, sign in, access account"},"socialDesc":{"en":"Sign in to your account and continue"},"socialTitle":{"en":"Login - Access Your Account"}},"metaImage":""},{"id":"d44c4765-6720-45f8-a104-0694151e0be2","linkId":"d44c4765-6720-45f8-a104-0694151e0be2","name":"UserManagement","folder":"Admin/","paths":{"en":"user-management","default":"user-management"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"2eceab10-e521-489b-946c-2a9f57b54414","sectionTitle":"Navigation Bar","linkId":"2c6f2f74-a5eb-4b42-8c1e-4a95122b0ba2"},{"uid":"84dc26e1-b087-4599-af08-2227c25d1cb2","sectionTitle":"Main Content","linkId":"70e26290-11ac-4991-8c2b-bb3f83ad8296"}],"pageUserGroups":[],"title":{"en":"User Management Dashboard"},"meta":{"desc":{"en":"Comprehensive user management dashboard for administrators and managers"},"keywords":{"en":"user management, employee tracking, project assignment"},"socialDesc":{"en":"Manage employees, assign projects, and track workforce details"},"socialTitle":{"en":"User Management Dashboard"}},"metaImage":""},{"id":"d4ed768f-17d9-42ff-a99f-b0b3b91a8822","linkId":"d4ed768f-17d9-42ff-a99f-b0b3b91a8822","name":"Predictions","folder":"Analytics/","paths":{"en":"predictions","default":"predictions"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"d0927a18-197f-4926-8c44-b63f6d644217","sectionTitle":"Header Section","linkId":"5ea94568-dd1e-449b-8e75-118f06fcc5f6"},{"uid":"aa2f0e76-60c6-48f2-8508-a18fe4bd592f","sectionTitle":"Main Content","linkId":"ead544e8-3883-4d10-b87d-e520b5e11364"}],"pageUserGroups":[],"title":{"en":"Company Predictions & Analytics Dashboard"},"meta":{"desc":{"en":"Comprehensive predictive analytics dashboard with advanced forecasting models for revenue, projects, and workforce"},"keywords":{"en":"predictions, analytics, revenue forecast, ARIMA, LSTM, Holt-Winters, machine learning"},"socialDesc":{"en":"Advanced predictive analytics for strategic business insights"},"socialTitle":{"en":"Company Predictions Dashboard"}},"metaImage":""},{"id":"cd2744b5-f5e1-4f89-bd3a-5170874b5ad4","linkId":"cd2744b5-f5e1-4f89-bd3a-5170874b5ad4","name":"UserDetails","folder":"Admin/","paths":{"en":"user-details","default":"user-details"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"b0b9dda3-b9cf-41c7-8cb8-7597414c3e1a","sectionTitle":"Navigation Bar","linkId":"262ab0ed-fe45-41f9-8b1c-3622d6656b27"},{"uid":"2a20c6fa-2a5a-418b-9a2c-2a652fcbbac2","sectionTitle":"Main Content","linkId":"03c9d30f-3bbe-4a2e-997c-faddd4a0d1cc"}],"pageUserGroups":[],"title":{"en":"User Details & Project Assignment"},"meta":{"desc":{"en":"Detailed user profile and project assignment management page for administrators"},"keywords":{"en":"user profile, project assignment, employee management, work hours"},"socialDesc":{"en":"Manage user details and assign projects with specific work hours and timelines"},"socialTitle":{"en":"User Details & Project Management"}},"metaImage":""},{"id":"41c9cc27-3542-4390-b214-0a8f77d2fa4d","linkId":"41c9cc27-3542-4390-b214-0a8f77d2fa4d","name":"Reports","folder":"Analytics/","paths":{"en":"reports","default":"reports"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"0c7435b3-b233-4c39-ab34-fdfac34fb99c","sectionTitle":"Header Section","linkId":"f66c6bc4-e0bb-4de2-99af-810da9d3bdce"},{"uid":"0fac330f-eede-4952-a7c4-37638c323104","sectionTitle":"Main Content","linkId":"8566bbb0-1ce7-4dcc-87b3-63845e2eaabf"}],"pageUserGroups":[],"title":{"en":"Company Analytics & Performance Reports"},"meta":{"desc":{"en":"Comprehensive reports on seasonal variations, employee trends, project predictions, and model performance analysis"},"keywords":{"en":"reports, analytics, employee trends, project predictions, seasonal variations, model performance"},"socialDesc":{"en":"Detailed insights into employee trends, project predictions, and analytical model accuracy"},"socialTitle":{"en":"Company Performance Reports"}},"metaImage":""},{"id":"01fec412-aee3-41f6-b737-47d59dc2d3e0","linkId":"01fec412-aee3-41f6-b737-47d59dc2d3e0","name":"About","folder":"Company/","paths":{"en":"about","default":"about"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"64189d43-82c3-4337-b51f-09aa60ad022f","sectionTitle":"Hero Section","linkId":"50327841-d3ac-4aea-91f7-051bdc63fe67"},{"uid":"94aae336-ab57-461c-bf60-a1274ec8a04e","sectionTitle":"Mission Section","linkId":"0215fa5e-73ed-4b9e-b57c-24fac2987443"},{"uid":"0ee72e81-22cc-4069-ad4d-09c1a6583eb7","sectionTitle":"Features Section","linkId":"9a457a84-3c80-4791-8469-ca16e0bf9456"},{"uid":"422b216f-ec52-478e-aae3-b30833cec995","sectionTitle":"Team Section","linkId":"2784daf9-d6ea-444c-9ce4-62d0940f5b4c"},{"uid":"e169749c-0497-4a11-bc3c-c8d6d518c7ac","sectionTitle":"Achievements Section","linkId":"c0806cc5-e31c-413c-9d4e-8823e5e9ab3f"},{"uid":"8ca7dc3e-ba12-494f-b40d-b2bf26de04c4","sectionTitle":"Achievements Section","linkId":"b13892cd-5a2e-4869-8be5-20a8b1a4d399"}],"pageUserGroups":[],"title":{"en":"About Our Project and Application"},"meta":{"desc":{"en":"Learn about our project, mission, and the innovative application that drives our business forward"},"keywords":{"en":"project overview, application details, company mission, team information"},"socialDesc":{"en":"Get insights into our project's vision, the problem we're solving, and how our application makes a difference"},"socialTitle":{"en":"Discover Our Project and Innovative Solution"}},"metaImage":""},{"id":"a6058d35-6a98-4dbb-b333-0b6dc6a59756","linkId":"a6058d35-6a98-4dbb-b333-0b6dc6a59756","name":"About","folder":"Company/","paths":{"en":"about","default":"about"},"langs":["en"],"cmsDataSetPath":null,"sections":[],"pageUserGroups":[],"title":{"en":"About Our Project and Application"},"meta":{"desc":{"en":"Learn about our project, mission, and the innovative application that drives our business forward"},"keywords":{"en":"project overview, application details, company mission, team information"},"socialDesc":{"en":"Get insights into our project's vision, the problem we're solving, and how our application makes a difference"},"socialTitle":{"en":"Discover Our Project and Innovative Solution"}},"metaImage":""},{"id":"cf84b903-dd98-4811-992e-36eb787f5c80","linkId":"cf84b903-dd98-4811-992e-36eb787f5c80","name":"About","folder":"Company/","paths":{"en":"about","default":"about"},"langs":["en"],"cmsDataSetPath":null,"sections":[],"pageUserGroups":[],"title":{"en":"About Our Project and Application"},"meta":{"desc":{"en":"Learn about our project, mission, and the innovative application that drives our business forward"},"keywords":{"en":"project overview, application details, company mission, team information"},"socialDesc":{"en":"Get insights into our project's vision, the problem we're solving, and how our application makes a difference"},"socialTitle":{"en":"Discover Our Project and Innovative Solution"}},"metaImage":""}],"plugins":[{"id":"2bd1c688-31c5-443e-ae25-59aa5b6431fb","name":"REST API","namespace":"restApi"}]};
// eslint-disable-next-line no-undef
window.wwg_cacheVersion = 1;
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
