import { test, expect } from '@playwright/test';


test.describe('SpaceWord - Tests Fonctionnels', () => {
  // TEST FONCTIONNEL 1 : Le jeu se charge correctement
  test('La page du jeu se charge sans erreur', async ({ page }) => {
    test.setTimeout(50000);
    await page.clock.install();
    await page.goto('http://localhost:3000/');

    // Vérifier le titre
    await expect(page).toHaveTitle("Jump Game");

    // Vérifier qu'il n'y a pas d'erreur JavaScript
    page.on('pageerror', (err) => {
      throw new Error(`Erreur JavaScript: ${err.message}`);
    });

    // Vérifier que le canvas est présent
    const canvas = page.locator('canvas');
    await expect(canvas).toBeVisible();
  });

  // TEST FONCTIONNEL 2 : Le joueur peut commencer une partie
  test('Cliquer sur Start lance le jeu', async ({ page }) => {
    test.setTimeout(50000);
    await page.clock.install();

    await page.goto('http://localhost:3000');

    // Cliquer sur le bouton Start
    await page.click('a#jogar-btn');
    // Attendre 1 seconde
    await page.waitForTimeout(1000);

  
  });

// TEST FONCTIONNEL 3 : On peut taper des lettres
test('On peut taper des lettres pour jouer', async ({page}) => {
  test.setTimeout(3000);
  
await page.goto('http://localhost:3000');
    await page.click('#jogar-btn');
    
    await page.waitForTimeout(1000); 
    
    // Taper des lettres
    await page.keyboard.type('space');
    
    await page.waitForTimeout(500); 
    
    await page.keyboard.type('word');
    
    await page.waitForTimeout(500); 
    
    // Vérifier que le jeu tourne toujours
    await expect(page.locator('canvas')).toBeVisible();
});
  

  });


