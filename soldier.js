const soldier = {
  nickname: 'Khalid',
  health: 10,
  gun: {
    name: 'ar-12',
    ammo: 30
  },
  magazines: 3,
  shoot() {
    if (this.gun.ammo > 0) {
      console.log('бах-бах');
      this.gun.ammo--;
    } else return 'обойма пуста. Перезаредитесь';
  },
  reload() {
    if (this.magazines > 0) {
      this.gun.ammo = 30;
      this.magazines--;
      console.log('перезарядка...');
    } else return 'не осталось припасов';
  },
  hit() {
    this.health--;
    if (this.health <= 0) return 'Ты проиграл';
  },

}