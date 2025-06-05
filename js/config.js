/**
 * config.js - Configurações do quiz
 * 
 * Este arquivo contém as configurações personalizáveis do quiz.
 * Altere estas configurações para adaptar o quiz à sua matéria.
 */

// Configuração do quiz
const quizConfig = {
    // Título principal que aparece na tela de login
    title: "MFC",
    
    // Nome do localStorage para salvar os dados do usuário
    storageKey: "quizMFC",
    
    // Lista de módulos disponíveis
    // O nome do arquivo deve corresponder ao valor em 'file' (sem a extensão .json)
    modules: [
        {
            id: "exantema",
            name: "Doenças Exantemáticas",
            file: "questoes_exantema"
        },
        {
            id: "tb",
            name: "Tuberculose",
            file: "tb"
        },
        {
            id: "HIV",
            name: "HIV e AIDS",
            file: "hiv"
        },
        {
            id: "covid",
            name: "COVID-19",
            file: "covid19"
        },
        {
            id: "hepatites",
            name: "Hepatites Virais",
            file: "heps"
        },
        {
            id: "arboviroses",
            name: "Arboviroses",
            file: "arboviroses"
        },
        {
            id: "violencia",
            name: "Violências",
            file: "violence"
        },
        {
            id: "sifilis",
            name: "Sífilis",
            file: "sifilis"
        },
        // Adicione mais módulos conforme necessário
    ]
};
