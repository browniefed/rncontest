var Images = {
    getImage: (img) => {
        switch (img) {
            case 'andre_staltz': 
                return require('image!andre_staltz');
            case 'andreas_savvides': 
                return require('image!andreas_savvides');
            case 'brent_vatne': 
                return require('image!brent_vatne');
            case 'christian_alfoni': 
                return require('image!christian_alfoni');
            case 'daniel_hengeveld': 
                return require('image!daniel_hengeveld');
            case 'daniel_steigerwald': 
                return require('image!daniel_steigerwald');
            case 'francois_de_dampredon': 
                return require('image!francois_de_dampredon');
            case 'guillermo_rauch': 
                return require('image!guillermo_rauch');
            case 'james_long': 
                return require('image!james_long');
            case 'joshua_sierles': 
                return require('image!joshua_sierles');
            case 'julia_gao': 
                return require('image!julia_gao');
            case 'marcelka_hrda': 
                return require('image!marcelka_hrda');
            case 'mark_dalgleish': 
                return require('image!mark_dalgleish');
            case 'martin_konicek': 
                return require('image!martin_konicek');
            case 'michel_weststrate': 
                return require('image!michel_weststrate');
            case 'mike_grabowski': 
                return require('image!mike_grabowski');
            case 'nikita_prokopov': 
                return require('image!nikita_prokopov');
            case 'paul_taylor': 
                return require('image!paul_taylor'); 
            case 'rajiv_tirumalareddy': 
                return require('image!rajiv_tirumalareddy');
            case 'richard_feldman': 
                return require('image!richard_feldman');
            case 'sean_grove': 
                return require('image!sean_grove');
            case 'tomas_kulich': 
                return require('image!tomas_kulich');
            case 'victor_grishchenko': 
                return require('image!victor_grishchenko');
        }
    }
}

module.exports = Images;