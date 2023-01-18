import {test, exports,page} from '@playwright';
import InfoAdmin from './HRM_info.spec';
test('test', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    const obj1 = new InfoAdmin(page);
await obj1.infoLog();
await obj2.InfoAdmin();
});
