/**
 * Um array de rotas que são usadas para autenticação
 * @type {string[]}
 */
export const authRoutes: string[] = ['/login']

/**
 * Pagina que o usuário será redirecionado após o login
 * @type {string}
 */
export const defaultLoginRedirect: string = '/'

/**
 * Pagina que o usuário será redirecionado se não estiver logado
 * @type {string}
 */
export const defaultLoginRoute: string = '/login'
